# ZOLOTI HEROES

> *Everyone's busy. Nobody's coming. Get to Chicot anyway.*

A 2D side-scrolling action game about the universal struggle of getting your friend group to actually meet up. Pick one of 8 real friends, fight through waves of everyday excuses, and battle your way across Kyiv to reach Chicot cafe.

Think Contra, but instead of aliens you're dodging alarm clocks and "sorry can't make it" texts.

## The Roster

| Hero | Difficulty | Starting Point | Levels |
|------|-----------|----------------|--------|
| Valentyn | ★☆☆☆☆☆☆☆ | Podil | 3 |
| Victor | ★★☆☆☆☆☆☆ | Obolon | 4 |
| Artem | ★★★☆☆☆☆☆ | Lukianivska | 5 |
| Dima | ★★★★☆☆☆☆ | Lybidska | 5 |
| Karina | ★★★★★☆☆☆ | Pozniaky | 6 |
| Lera | ★★★★★★☆☆ | Sviatoshyn | 7 |
| Ambal | ★★★★★★★☆ | Boryspil | 8 |
| Anton | ★★★★★★★★ | Akademmistechko | 10 |

Difficulty scales with real-life distance from Chicot. Anton starts from the literal edge of the metro line. Good luck.

## Enemies (a.k.a. Excuses)

| Enemy | Points | You know the type |
|-------|--------|-------------------|
| Alarm Clock | 100 | "5 more minutes..." |
| "Can't Make It" | 75 | The classic text message |
| Laptop | 150 | "Just one more PR..." |
| Rain Cloud | 175 | "Have you seen the weather?" |
| Traffic | 200 | Kyiv traffic is no joke |
| Couch Potato | 250 | Maximum inertia achieved |

## Features

- **8 playable characters** with unique routes through Kyiv
- **Contra-style gameplay** — run, jump, shoot your way through excuses
- **Indiana Jones map view** — animated dotted-line travel between levels across a Kyiv map
- **Desktop + mobile controls** — keyboard/mouse or twin-stick touch
- **Per-character progress** — switch between heroes without losing progress
- **Arcade leaderboard** — die, enter your name, compete for high scores
- **Pause & resume** — ESC or pause button, with quit-to-menu option
- **localStorage persistence** — progress survives browser refreshes

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Game Engine | [Phaser 3](https://phaser.io/) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| State | React Context + useReducer |
| Persistence | localStorage (game progress) |
| Leaderboard | [Upstash Redis](https://upstash.com/) via Vercel Marketplace, in-memory fallback for local dev |
| Hosting | [Vercel](https://vercel.com/) |

## Getting Started

### Prerequisites

- Node.js 24+ (see `.nvmrc`)

### Install & Run

```bash
git clone https://github.com/your-username/zolotiheroes.git
cd zolotiheroes
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Leaderboard Setup (Optional)

The leaderboard works out of the box with an in-memory fallback for local development (resets on server restart). For persistent scores:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard) → Storage → click **Upstash** → create a Redis database
2. Vercel will add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to your project
3. Pull the environment variables locally:

```bash
npx vercel env pull .env.local
```

## Controls

### Desktop

| Action | Key |
|--------|-----|
| Move | WASD / Arrow keys |
| Jump | W / Space |
| Aim | Mouse |
| Shoot | Left click (semi-auto) |
| Pause | ESC / Pause button |

### Mobile

| Action | Control |
|--------|---------|
| Move | Left side of screen |
| Jump | Top-left area |
| Aim + Shoot | Right side (auto-fire) |

## Project Structure

```
src/
├── app/                  # Next.js pages
│   ├── page.tsx          # Title screen
│   ├── select/           # Character selection
│   ├── map/              # Kyiv map with level pins
│   ├── play/             # Phaser game wrapper
│   ├── victory/          # Character/game completion
│   ├── gameover/         # Arcade-style name entry
│   ├── leaderboard/      # High scores
│   └── api/leaderboard/  # Score submission API
├── components/           # React components (CharacterCard, MapView)
├── context/              # GameContext (state management)
├── data/                 # Character definitions & types
└── game/                 # Phaser game code
    ├── config.ts         # Game constants
    ├── entities/          # Player class
    └── scenes/           # LevelScene, HUDScene
```

## Customization

**Map pins:** Each level has `mapX` / `mapY` values (0-1 range) in `src/data/characters.ts`. Tweak to match real Kyiv locations.

**New characters:** Add an entry to the `characters` array in `src/data/characters.ts` following the `Character` type.

**Character photos:** Drop head images at `public/characters/{id}-head.png`. The game renders real photos on cartoon bodies.

**Enemy types:** Add new types to `ENEMY_POINTS` in `src/data/characters.ts` and reference them in level `enemies` arrays.

## License

MIT
