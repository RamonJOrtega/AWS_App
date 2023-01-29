import os
import openai
import argparse

def main():
    print("Running keyToRun.py")

    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    print(f"User input: {user_input}")
    generate_branding_snippet(user_input)
    pass

def generate_branding_snippet(prompt: str):
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")
    enriched_prompt = f"Generate upbeat branding snippet for {prompt}: "
    response = openai.Completion.create(model="text-davinci-003", prompt=enriched_prompt, temperature=0.5, max_tokens=100)
    
    print(response)
    branding_text = response["choices"][0]["text"]
    print(branding_text)

if __name__ == "__main__":
    main()