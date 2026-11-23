# KP Photography — Portfolio (The Series)

Netflix-style portfolio for KP Photography. All content is in `src/data/portfolio.ts`.

## Publish (no computer needed)
1. Upload this folder to a GitHub repository.
2. On Netlify or Cloudflare Pages: import the repo.
   - Build command: `npm run build`
   - Publish / output folder: `dist`
3. After it is live, open `index.html` and change `og:image` to the full link, e.g. `https://yoursite.com/assets/og-image.jpg`, so WhatsApp previews show the image.

## Run on a computer
`npm install` then `npm run dev`

## Change things
- Text, rates, links, packages: `src/data/portfolio.ts`
- Photos: `public/assets/` (portrait-*.webp = hero, about-720.webp = About, shoot-*.webp = work covers)
- Price list PDF: `public/assets/KP_Photography_Price_List.pdf`
