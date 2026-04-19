# NOCTURNE — A Cinema of Quiet Moments

A high-end creative homepage. A digital cinematheque of frames from films that never were.

**Live:** https://nocturne.risesitelab.com

## Concept

Five "scenes" from unmade films, presented as a slow horizontal reel. The hero is an iridescent torus-knot drifting in a starfield; the editorial flow alternates between vertical reading and a GSAP-pinned horizontal scroll; the studio reveals itself only where your cursor falls (torch-mask).

Palette: deep navy `#06070F` · electric ultraviolet `#9D8DF1` · ember `#E89F71` · moon `#EAE9F0`.
Type: Instrument Serif (display + italic) · Inter (body) · JetBrains Mono (captions).

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme`)
- React Three Fiber + Drei + Postprocessing (Bloom)
- Framer Motion · GSAP (ScrollTrigger horizontal pin) · Lenis smooth scroll
- Custom lerp cursor · CSS-mask torch reveal

## Develop

```bash
npm install --legacy-peer-deps
npm run dev
```

## Deploy

```bash
npm run build
# → dist/ deployed to Cloudflare Pages (project: nocturne)
```

By Nocturne Studio (GrowthSite Lab) · MMXXVI
