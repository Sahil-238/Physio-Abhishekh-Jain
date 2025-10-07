# Physio Abhishek Jain – Website

A modern, animated React + Tailwind site for home-visit physiotherapists Abhishek Jain and Preeti Payal in Raipur.

## Tech
- Vite + React 18
- Tailwind CSS 3
- Framer Motion animations
- React Router (Home, About, Contact)

## Requirements covered
- Home, About, Contact pages
- Smooth animations and responsive UI
- Hero with image placeholder (replace when client image is provided)
- Optional video section placeholder
- Working navigation and responsive layout
- Simulated contact form submission
- Sections: Home visits, Pain management, Post-op rehabilitation
- Light colors with emerald/teal accents
- Phone numbers and address shown on all pages (header/footer/sections)

## Setup

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

3) Build for production
```bash
npm run build
```

4) Preview the production build
```bash
npm run preview
```

## Project structure
```
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.ts
├─ public/
│  ├─ favicon.svg
│  └─ assets/
│     ├─ placeholder-physio.jpg
│     └─ placeholder-physio-2.jpg
└─ src/
   ├─ index.css
   ├─ main.jsx
   ├─ components/
   │  ├─ ContactForm.jsx
   │  ├─ Doctors.jsx
   │  ├─ Hero.jsx
   │  ├─ Services.jsx
   │  └─ VideoSection.jsx
   ├─ pages/
   │  ├─ About.jsx
   │  ├─ App.jsx
   │  ├─ Contact.jsx
   │  └─ Home.jsx
   └─ shared/
      ├─ Footer.jsx
      └─ Navbar.jsx
```

## Replacing images with client photo
- Put Abhishek’s photo in `public/assets/abhishek.jpg` (or `.png`).
- Update the following places:
  - `src/components/Hero.jsx` – Replace `/assets/placeholder-physio.jpg` with `/assets/abhishek.jpg`.
  - `src/components/Doctors.jsx` – Replace the `img` for Abhishek (and optionally Preeti) with real photos.
- Images are displayed with `object-cover` inside rounded containers for clean cropping.

## Customization
- Colors: change brand colors in `tailwind.config.js` under `theme.extend.colors.brand`.
- Contact info: update phone numbers and address in `Navbar.jsx`, `Footer.jsx`, `ContactForm.jsx`, and `Doctors.jsx`.
- Hours and messaging can be edited in `Footer.jsx` and text blocks across pages.

## Next steps (recommended)
- SEO: add richer meta tags, `open graph` tags, and `sitemap.xml`.
- Deploy: use Netlify, Vercel, or GitHub Pages. For Netlify/Vercel: connect repo and deploy.
- Analytics: add Google Analytics or Plausible.
- Email integration: connect the contact form to a service like Formspree, Getform, or a simple serverless function.
- Performance: optimize images (use `srcset` or Next.js-style tooling if migrating later).
- Accessibility: add better focus states and aria labels where appropriate.

## License
For client project use.
