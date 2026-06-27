import os
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.post("/contact")
async def contact(form: ContactForm):
    text = f"New contact form submission:\nName: {form.name}\nEmail: {form.email}\nMessage: {form.message}"
    async with httpx.AsyncClient() as client:
        r = await client.post(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            json={"chat_id": CHAT_ID, "text": text},
        )
    if not r.is_success:
        raise HTTPException(status_code=502, detail=r.text)
    return {"ok": True}
