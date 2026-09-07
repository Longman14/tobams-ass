# Tobams Group Training and Development

A responsive Next.js landing page for Tobams Group's training and development programs.

## Setup

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the live development URL at https://tobams-ass.vercel.app .

For a production build:

```bash
npm run build
npm run start
```

Run the lint checks with `npm run lint`.

## Design decisions and technical assumptions

- The page uses the existing Tobams Group visual direction: Roboto for body copy, Nunito for headings, a plum primary color, and coral accents.
- Existing local image assets in `public/` are retained and given descriptive alternative text.
- Navigation and CTA destinations are presentation placeholders because no route or CMS endpoint was provided; the buttons remain static UI controls.
- AI was used to check for anything I might have missed in the instructions.

## Project structure

- `app/`: App Router layout, page, and global styles.
- `components/`: Header, content sections, testimonials, and footer.
- `public/`: Local image assets used by the page.

