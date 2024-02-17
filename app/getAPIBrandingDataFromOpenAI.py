import os
from typing import List
from openai import OpenAI
import argparse
import re

# To minimize cost, target the gpt-3.5-turbo model endpoint at openAI
# Limit the size of the prompt we give it in order to get better results
MAX_INPUT_LENGTH = 32
MODEL="gpt-3.5-turbo"

# A function that allows the user to input a prompt from the command line.
# Example: python3 getAPIBrandingDataFromOpenAI.py -i "cofee served from a caboose" 
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

# A function that validates the length of the input
def validate_length(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH

def generate_snippet_and_keywords(prompt: str) -> {str, List[str]}:
    snippet = generate_branding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}

# A function to generate an array of keywords or hashtags for social media
def generate_keywords(prompt: str) -> List[str]:
    # Load your API key from an environment variable or secret management service
    OPENAI_API_KEY =  os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=OPENAI_API_KEY)

    enriched_prompt = f"Generate related branding keywords for {prompt}: "
    print(enriched_prompt)

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": enriched_prompt},
        ],
        temperature=0,
    )

    #extract output text.
    keywords_text: str = response.choices[0].message.content
    
    #strip whitespace
    keywords_text = keywords_text.strip()
    keywords_array = re.split("[0-9.\n]", keywords_text) ## delimite by digits 0-10, period, and newline
    keywords_array = [k.lower().strip() for k in keywords_array] ## strip the whitespace in array elements
    keywords_array = [k for k in keywords_array if len(k) > 0] ## keep only the elements that are not empty

    print(f"Keywords: {keywords_array}")   
 
    return keywords_array

# A function to generate a long string representing a social media caption
def generate_branding_snippet(prompt: str) -> str:
    # Load your API key from an environment variable or secret management service
    # in terminal enter "export OPENAI_API_KEY=xx-xxxxxxxxxx"
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=OPENAI_API_KEY);

    enriched_prompt = f"Generate a short, upbeat branding snippet for {prompt}: "
    print(enriched_prompt)

    response =  client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": enriched_prompt},
        ],
        temperature=0,
    )

    #extract output text.
    branding_text: str = response.choices[0].message.content

    #strip whitespace
    branding_text = branding_text.strip()
    # add ... to truncated statements
    last_char = branding_text[-1]
    if last_char not in {".", "!", "\\", "?","\""}:
        branding_text += "..."

    print(f"Snippet: {branding_text}")   

    return branding_text

if __name__ == "__main__":
    main()