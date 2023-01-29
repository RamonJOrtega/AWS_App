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
    pass

# Load your API key from an environment variable or secret management service
# openai.api_key = os.getenv("OPENAI_API_KEY")

# subject = "wheels"
# prompt = f"Generate upbeat branding snippet for {subject}"

# response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=0.5, max_tokens=100)
# print(response)

if __name__ == "__main__":
    main()