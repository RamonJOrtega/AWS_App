import os
from typing import List
import openai
import argparse
import re

MAX_INPUT_LENGTH = 32

def main():

    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    if validate_length(user_input):
        branding_result = generate_branding_snippet(user_input)
        keywords_result = generate_keywords(user_input)
    else:
        raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH}. Submitted input is {user_input}" 
        )

def validate_length(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH

def generate_keywords(prompt: str) -> List[str]:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")
    enriched_prompt = f"Generate related branding keywords for {prompt}: "
    print(enriched_prompt)
    
    response = openai.Completion.create(model="text-davinci-003", prompt=enriched_prompt, temperature=0.1, max_tokens=32)

    #extract output text.
    keywords_text: str = response["choices"][0]["text"]
    #strip whitespace
    keywords_text = keywords_text.strip()
    keywords_array = re.split("[0-9.\n]", keywords_text) ## delimite by digits 0-10, period, and newline
    keywords_array = [k.lower().strip() for k in keywords_array] ## strip the whitespace in array elements
    keywords_array = [k for k in keywords_array if len(k) > 0] ## keep only the elements that are not empty

    print(f"Keywords: {keywords_array}")   
 
    return keywords_array

def generate_branding_snippet(prompt: str) -> str:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")
    enriched_prompt = f"Generate upbeat branding snippet for {prompt}: "
    print(enriched_prompt)

    response = openai.Completion.create(model="text-davinci-003", prompt=enriched_prompt, temperature=0.1, max_tokens=32)
    
    #extract output text.
    branding_text: str = response["choices"][0]["text"]

    #strip whitespace
    branding_text = branding_text.strip()
    # add ... to truncated statements
    last_char = branding_text[-1]
    if last_char not in {".", "!", "?"}:
        branding_text += "..."

    print(f"Snippet: {branding_text}")   

    return branding_text

if __name__ == "__main__":
    main()