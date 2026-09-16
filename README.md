# Studio Lash Lagos

Luxury lash salon website built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

- `app/layout.tsx` — root layout, loads fonts, mounts Navbar, Footer, and the global WhatsApp float button
- `app/page.tsx` — home page (hero, services preview, testimonials, Instagram strip)
- `app/services/page.tsx` — full price list
- `app/gallery/page.tsx` — 6-image portfolio grid
- `app/contact/page.tsx` — address, hours, WhatsApp CTA, map placeholder
- `app/components/Navbar.tsx` — sticky, blurred header with animated mobile drawer
- `app/components/WhatsAppFloat.tsx` — fixed bottom-right WhatsApp button
- `app/components/Footer.tsx` — black footer with Instagram link

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Click **Deploy**.

## Notes

- Gallery and preview images are pulled live from Pexels via `next/image`; `next.config.js` allows `images.pexels.com` as a remote pattern.
- The WhatsApp number used throughout is `+234 810 162 8395` (`wa.me/2348101628395`).
- The Contact page map is a styled placeholder — swap in a Google Maps embed or `@react-google-maps/api` once you have an API key.
