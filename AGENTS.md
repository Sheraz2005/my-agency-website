# Repository Guidelines

## Project & Stack

Build a professional web development agency website with Next.js App Router, React, and JavaScript. Use Tailwind CSS for styling, Framer Motion for animation, and Lucide React for icons. Keep route-level UI in the App Router structure, reusable components in a shared component area, and optimized public assets in `public/`. Inspect the actual repository structure before choosing paths or changing files; do not assume files exist based on this guide.

## Design & Accessibility

Aim for a premium, modern agency aesthetic with a minimal interface, strong typography, clear visual hierarchy, and consistent spacing. Design mobile-first and verify layouts across screen sizes. Use Framer Motion for smooth, purposeful animation. Prefer semantic HTML, accessible names, keyboard-friendly interactions, and sufficient contrast. Optimize images and avoid work that harms loading or runtime performance.

## Code Guidelines

Build modular, reusable React components and keep each component focused and maintainable. Use consistent naming: `PascalCase` for component names and files, and clear `camelCase` for JavaScript variables and functions. Follow the existing project’s formatting and Tailwind patterns. Keep dependencies lean; use the specified stack before adding a package. Keep secrets and machine-specific configuration out of source control.

## Development & Validation

Inspect relevant code before editing. Make focused changes, preserve working components, and never modify unrelated files. After major implementations, run the available build checks and resolve errors before proceeding. Check `package.json` for the actual scripts; common Next.js commands are `npm run dev`, `npm run build`, and `npm run start`, but use only scripts that are defined. Add or update tests when the project has a testing setup, and document the applicable command.

## Change Scope

Avoid repeatedly analyzing unchanged files and do not rewrite whole files for narrow changes. Do not generate unnecessary documentation. Ask before making a major architectural change. Pull requests should describe the visible change, summarize validation, link related issues when available, and include screenshots for visual updates.
