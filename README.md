# Ayush Kumar, Portfolio

A premium, recruiter-friendly portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Editing content

Everything on the site (text, links, projects, experience, skills, images) is driven from one file:

```
src/content/content.ts
```

You do not need to touch any component or layout file to update content.

- To add or remove a project, add or remove an object in `featured_projects` or `product_business_projects`.
- To add or remove a leadership/experience entry, edit `experience_and_leadership.entries`.
- To activate a link (LinkedIn, resume, a project report, a leadership entry, a product project),
  set the field to a real URL or a local path. Leave it as an empty string `""` and that title or
  button automatically renders as plain, non-clickable text (no broken links, no raw URLs shown).
- To add a photo, drop the file in `public/images/` using the exact file name referenced in
  `content.ts` (`/images/profile.jpg` for the hero, `/images/leadership.jpg` for the
  Experience and Leadership section). Replacing the file with the same name updates the site
  automatically, no code changes needed. Until a file exists at that path, a labeled placeholder
  frame is shown instead of a broken image.
- To add a project report, drop the PDF in `public/reports/` and point a project's `link` field
  at it, e.g. `"/reports/redrob.pdf"`.
- To change colors or fonts, edit `tailwind.config.ts` (`colors`, `fontFamily`).

## Sections on the site

1. Hero (name, headline, subtitle, one photo, GitHub/LinkedIn/Resume links)
2. About / snapshot
3. Featured Data Science / AI/ML projects
4. Product / business projects
5. Experience and Leadership (stacked roles + one editable image frame)
6. Achievements
7. Skills
8. Contact

There is intentionally no separate stats/impact band and no photo gallery section.

## File structure

```
ayush-portfolio/
  src/
    app/
      layout.tsx        Self-hosted fonts, metadata, global shell
      page.tsx           Assembles all sections in order
      globals.css        Tailwind layers and base styles
    components/
      Nav.tsx
      Hero.tsx
      About.tsx
      FeaturedProjects.tsx
      ProductProjects.tsx
      Experience.tsx        Experience and Leadership section
      Achievements.tsx
      Skills.tsx
      Contact.tsx
      Footer.tsx
      ui/
        Button.tsx
        Chip.tsx
        SectionHeading.tsx
        EditableImage.tsx    Image frame with graceful placeholder fallback
    content/
      content.ts             <-- single source of truth, edit this file
    types/
      content.ts               Type definitions for the content shape
    lib/
      utils.ts                  Small helpers (className merge, placeholder/link detection)
  public/
    images/                     profile.jpg, leadership.jpg go here
    reports/                    project PDF reports go here
  tailwind.config.ts
  next.config.mjs
  package.json
```
