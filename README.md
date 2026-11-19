# tester: a minimal chat front-end for a Deno Deploy backend

A small learning project from early 2025: two static pages that call an API hosted on
[Deno Deploy](https://deno.com/deploy), published with GitHub Pages.

It was my first step in wiring a browser page to an LLM backend that I host myself. The page holds
no API key: the key belongs with the backend.

## What is here

| Path | What |
| --- | --- |
| `index.html` | Chat page. Sends the text you type to a backend and shows the reply. |
| `jiayou-web/` | A simpler page that fetches plain text from a Deno Deploy endpoint and displays it. |
| `.github/workflows/static.yml` | Publishes the repository to GitHub Pages on every push to `main`. |

## How the chat page works

The page has no API key and no model code. It posts JSON to a backend you choose:

```http
POST <your backend>/api/chat
Content-Type: application/json

{"message": "hello"}
```

and expects JSON back:

```json
{"reply": "..."}
```

Enter the backend address in the box at the top of the page and press save. It is remembered in
your browser only. The backend must allow cross-origin requests from the page's origin.

The backend itself is not part of this repository.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Stack

HTML, CSS, vanilla JavaScript, GitHub Actions, GitHub Pages, Deno Deploy (backend).
