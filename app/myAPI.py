from fastapi import FastAPI, HTTPException
from getAPIBrandingDataFromOpenAI import generate_branding_snippet, generate_keywords, generate_snippet_and_keywords
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
 
app = FastAPI()
handler = Mangum(app)
MAX_INPUT_LENGTH=32

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=[60]
)

@app.get("/generate_snippet")
def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet, "keywords": []}

@app.get("/generate_keywords")
def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": None, "keywords": keywords}

@app.get("/generate_snippet_and_keywords")
def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    return generate_snippet_and_keywords(prompt)


def validate_input_length(prompt: str):
    if len(prompt) >= MAX_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail= f"Input length is too long. Must be under {MAX_INPUT_LENGTH} characters")
    pass