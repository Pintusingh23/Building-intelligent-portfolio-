import pytest
from unittest.mock import AsyncMock, MagicMock, patch
from fastapi.testclient import TestClient

# stub env before import
import os
os.environ.setdefault("TELEGRAM_BOT_TOKEN", "test_token")
os.environ.setdefault("TELEGRAM_CHAT_ID", "123")

from main import app  # noqa: E402

client = TestClient(app)


def _mock_tg(status=200, ok=True):
    resp = MagicMock()
    resp.is_success = ok
    resp.text = "ok"
    cm = AsyncMock()
    cm.__aenter__ = AsyncMock(return_value=cm)
    cm.__aexit__ = AsyncMock(return_value=False)
    cm.post = AsyncMock(return_value=resp)
    return cm


def test_contact_success():
    with patch("main.httpx.AsyncClient", return_value=_mock_tg()):
        r = client.post("/contact", json={"name": "Nitin", "email": "n@n.com", "message": "hi"})
    assert r.status_code == 200
    assert r.json() == {"ok": True}


def test_contact_telegram_failure():
    with patch("main.httpx.AsyncClient", return_value=_mock_tg(ok=False)):
        r = client.post("/contact", json={"name": "Nitin", "email": "n@n.com", "message": "hi"})
    assert r.status_code == 502


def test_contact_missing_fields():
    r = client.post("/contact", json={"name": "Nitin"})
    assert r.status_code == 422
