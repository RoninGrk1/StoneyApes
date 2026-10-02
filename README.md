# StoneyApes

Next.js web app for the StoneyApes crew.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What you can do

- Search the crew by name, trait, stone, or id
- Filter by rarity
- Save faces in this browser
- Reveal a random portrait
- Click a card to inspect it

Portrait bytes live in `data/portraits` and are served from `/api/portrait/[name]`.
Crew data lives in `data/apes.js`.
