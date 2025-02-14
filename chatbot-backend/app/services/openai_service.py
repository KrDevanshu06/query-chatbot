import openai
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def summarize_supplier(supplier_data: str) -> str:
    response = openai.ChatCompletion.create(  # Change to openai.ChatCompletion.create()
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Summarize this supplier's details in 1-2 sentences."},
            {"role": "user", "content": supplier_data},
        ],
        max_tokens=100,
    )
    return response["choices"][0]["message"]["content"]  # Fix accessing response
