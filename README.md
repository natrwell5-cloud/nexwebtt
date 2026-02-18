# NexWeb TT — Website

A clean, modern, 2-page website for **NexWeb TT**, a professional web design brand based in Trinidad & Tobago.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services, portfolio preview, testimonials, CTA, footer |
| Contact | `contact.html` | Intro, contact form (name, email, phone, project details), confirmation state, footer |

## Tech Stack

- **HTML5** — Semantic markup
- **Vanilla CSS** — Custom properties, responsive, dark mode (`css/styles.css`)
- **Vanilla JS** — Mobile nav, dark mode toggle, form handling (`js/main.js`)
- **Google Fonts** — Plus Jakarta Sans + Playfair Display
- **Material Symbols** — Icon set (loaded via CDN)

## Running Locally

### Option A — Python (built-in)

```bash
cd nexweb-tt
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B — Node.js (npx)

```bash
cd nexweb-tt
npx -y serve .
```

Then open the URL shown in your terminal (usually [http://localhost:3000](http://localhost:3000)).

### Option C — Just open the file

Double-click `index.html` — it works directly in any modern browser. No build step required.

## Project Structure

```
nexweb-tt/
├── index.html          # Home page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Full design system
├── js/
│   └── main.js         # Interactivity
└── README.md           # This file
```
