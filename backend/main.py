import os
import httpx
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
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

# ponytail: in-memory, add DB when persistence across restarts needed
contacts: list[dict] = []


class ContactForm(BaseModel):
    name: str
    email: str
    message: str
    phone: Optional[str] = None
    subject: Optional[str] = None


async def _tg_send(chat_id: str | int, text: str) -> None:
    async with httpx.AsyncClient() as client:
        r = await client.post(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            json={"chat_id": chat_id, "text": text, "parse_mode": "HTML"},
        )
    if not r.is_success:
        raise HTTPException(status_code=502, detail=r.text)


@app.post("/contact")
async def contact(form: ContactForm):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    entry = {**form.model_dump(), "timestamp": ts}
    contacts.append(entry)

    lines = [
        "📬 <b>New Contact</b>",
        f"👤 <b>Name:</b> {form.name}",
        f"📧 <b>Email:</b> {form.email}",
    ]
    if form.phone:
        lines.append(f"📞 <b>Phone:</b> {form.phone}")
    if form.subject:
        lines.append(f"📌 <b>Subject:</b> {form.subject}")
    lines += [f"💬 <b>Message:</b>\n{form.message}", f"🕐 {ts}"]

    await _tg_send(CHAT_ID, "\n".join(lines))
    return {"ok": True}


@app.post("/webhook")
async def webhook(request: Request):
    data = await request.json()
    msg = data.get("message", {})
    text = (msg.get("text") or "").strip()
    chat_id = msg.get("chat", {}).get("id")
    if not chat_id or not text.startswith("/"):
        return {"ok": True}

    if text == "/contacts":
        if not contacts:
            reply = "📭 No contacts yet."
        else:
            lines = [f"📋 <b>All Contacts ({len(contacts)})</b>\n"]
            for i, c in enumerate(contacts, 1):
                lines.append(f"<b>{i}. {c['name']}</b> — {c['email']}")
                if c.get("phone"):
                    lines.append(f"   📞 {c['phone']}")
                if c.get("subject"):
                    lines.append(f"   📌 {c['subject']}")
                lines.append(f"   🕐 {c['timestamp']}")
            reply = "\n".join(lines)

    elif text == "/latest":
        if not contacts:
            reply = "📭 No contacts yet."
        else:
            c = contacts[-1]
            parts = [
                "🔔 <b>Latest Contact</b>",
                f"👤 {c['name']}",
                f"📧 {c['email']}",
            ]
            if c.get("phone"):
                parts.append(f"📞 {c['phone']}")
            if c.get("subject"):
                parts.append(f"📌 {c['subject']}")
            parts += [f"💬 {c['message']}", f"🕐 {c['timestamp']}"]
            reply = "\n".join(parts)

    elif text == "/stats":
        reply = f"📊 <b>Stats</b>\nTotal contacts received: <b>{len(contacts)}</b>"

    elif text in ("/start", "/help"):
        reply = (
            "🤖 <b>Portfolio Bot</b>\n\n"
            "/contacts — list all contacts\n"
            "/latest — show latest contact\n"
            "/stats — total count\n"
            "/help — this message"
        )
    else:
        return {"ok": True}

    await _tg_send(chat_id, reply)
    return {"ok": True}
