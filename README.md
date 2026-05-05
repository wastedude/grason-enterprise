# Grayson Enterprises Website

A modern, dynamic website for Grayson Enterprises — a printing and branding shop.

## Tech Stack
- **Next.js 14** (React framework)
- **Pure CSS** (no Tailwind dependency)
- **Vercel-ready** out of the box

## Features
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll reveal animations
- Animated hero with gold accent theme
- Products & Services sections
- Stats / Why Us section
- Contact / Quote request form
- News ticker

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

Done! Your site will be live at `your-project.vercel.app`

## Customisation
- **Contact details**: Edit `src/pages/index.js` — search for `+254 700 000 000` and `info@graysonenterprises.co.ke`
- **Colours**: Edit CSS variables in `src/styles/globals.css` (`:root` block)
- **Content**: All products and services are in arrays at the top of `index.js`
