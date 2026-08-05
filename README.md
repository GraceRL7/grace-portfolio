# Grace Reshal Lewis — Portfolio

A premium personal portfolio site built with **React + Vite + TypeScript +
Tailwind CSS + Framer Motion + Three.js (React Three Fiber)**, styled after
Apple's Liquid Glass / iPhone 17 Pro Max design language.

All content (experience, projects, certifications, achievements, football
history) is pulled directly from `Grace_resume_2026.docx` — see
`src/data/resumeData.ts` as the single source of truth.

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static output lands in `dist/` — deploy it to Vercel, Netlify, GitHub
Pages, or any static host.

## Project structure

```
portfolio/
├─ public/assets/
│  ├─ Grace_Reshal_Lewis_Resume.pdf   ← powers the "Download Resume" button
│  ├─ grace-portrait.png              ← hero portrait
│  └─ favicon.svg
├─ src/
│  ├─ data/resumeData.ts              ← ALL real resume content lives here
│  ├─ components/
│  │  ├─ three/Football.tsx           ← the floating 3D football (R3F)
│  │  ├─ Navbar.tsx, Hero.tsx, About.tsx, Experience.tsx,
│  │  │  Projects.tsx, Skills.tsx, Football.tsx, Leadership.tsx,
│  │  │  Achievements.tsx, Certifications.tsx, Contact.tsx, Footer.tsx
│  │  ├─ GlassCard.tsx                ← reusable Liquid Glass surface
│  │  ├─ SectionHeading.tsx
│  │  └─ LoadingScreen.tsx
│  ├─ App.tsx                         ← composes all sections + scroll progress bar
│  └─ index.css                       ← design tokens & .glass utility classes
├─ tailwind.config.ts                 ← color/type/shadow tokens (the "brand")
└─ vite.config.ts
```

## Things to personalize before deploying

1. **GitHub URL** — `profile.github` in `src/data/resumeData.ts` is a
   placeholder (`https://github.com/`). Replace with the real handle.
2. **Live demo links** — `Victoria Football Academy`, `HomiFi`, and
   `Sportify` don't have public URLs in the resume, so their `link` field is
   `null` (no "visit" button renders). Add a URL once they're deployed.
3. **Resume PDF** — regenerate `public/assets/Grace_Reshal_Lewis_Resume.pdf`
   whenever the source resume changes.
4. **Portrait image** — swap `public/assets/grace-portrait.png` for a
   higher-res headshot if available; current is 1024×1536.

## Design system

- **Palette:** near-black void (`#030405`) background, electric pitch-green
  accent (`#3CFF9B`) tying football to code, Apple-blue secondary
  (`#5AC8FA`), gold for achievements (`#FFD60A`).
- **Type:** Space Grotesk (display) + Inter (body) + JetBrains Mono
  (labels/eyebrows/timestamps).
- **Signature element:** a procedurally-generated, physically-lit 3D
  football (no external model/texture needed) that floats in the hero and
  reappears in the Football Journey section.
- **Surface language:** `.glass` utility class in `index.css` — blurred,
  translucent panels with a light-sweep border gradient, used consistently
  across every card.
