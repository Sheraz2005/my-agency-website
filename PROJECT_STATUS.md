# NEXCRAFT — Project Status

## 1. Project Overview

- **Agency:** NEXCRAFT
- **Positioning:** Frontend Development & Digital Experience Studio
- **Tagline:** Crafting Digital Experiences. Building What's Next.
- **Goal:** Build a premium, professional frontend agency website.

## 2. Technology Stack

- Next.js 16.4.3
- React
- JavaScript
- Next.js App Router
- Tailwind CSS v4
- CSS Modules
- Framer Motion
- Lucide React
- ESLint

## 3. Design System

**Theme:** Obsidian + Deep Teal + Chrome.

**Colors:**

- Primary background: `#080D0E`
- Secondary background: `#142324`
- Primary text: `#F1F5F4`
- Accent: `#75B8B0`
- Muted text: `#899B99`
- Borders: `#263637`
- Cards: `#101819`

**Design direction:** Premium, minimal, dark surfaces with metallic visuals, subtle teal accents, editorial typography, responsive layouts, and restrained animations.

## 4. Completed Website Sections

All eight sections are implemented:

1. **Navbar** — NEXCRAFT wordmark, desktop section links, Contact CTA, and responsive mobile navigation.
2. **Hero** — Editorial headline and calls to action paired with an abstract metallic visual and subtle motion.
3. **Services** — Four frontend-focused service offerings in a responsive card layout.
4. **Portfolio** — Three alternating project showcases using AI-generated WebP concept project images; all are identified as concept projects.
5. **About** — Studio positioning, design and development approach, and three working principles.
6. **Process** — Four stages from Discover to Deliver, presented as a horizontal desktop timeline and vertical mobile timeline.
7. **Contact** — Contact details and a client-side validated project enquiry form.
8. **Footer** — Project CTA, brand information, section navigation, contact links, copyright, and Back to top link.

## 5. Important Implementation Details

- Navigation adapts between desktop links and a mobile menu.
- CSS Modules provide component styling; `src/app/globals.css` provides Tailwind CSS v4 setup, design tokens, and base styling.
- The contact form validates fields client-side and shows validation and success states. It does **not** currently send emails.
- Contact details are centralized in `src/lib/siteConfig.js` and shared by Contact and Footer.
- Contact displays the LinkedIn link as **“View LinkedIn profile”** while retaining the profile destination.
- Reduced-motion support is implemented in global styles and Framer Motion components.
- Portfolio entries are concept/demo projects, not client work.

## 6. Technical Fixes

- Removed the Google Fonts runtime/build dependency and use locally hosted Inter and Space Grotesk variable fonts through `next/font/local`.
- A previous Tailwind CSS loader/build issue was addressed while preserving Tailwind CSS v4 and CSS Modules. Component module styles are imported by their corresponding components.
- The current production build script uses `next build --webpack`.
- Preserve the existing `next.config.mjs`; avoid changing it unless a verified issue requires it.

## 7. Contact Configuration

These contact details are publicly visible on the website and are centralized in `src/lib/siteConfig.js`:

- **Email:** [sheraz2k5@gmail.com](mailto:sheraz2k5@gmail.com)
- **Phone:** [+91 96760 38910](tel:+919676038910)
- **WhatsApp:** [https://wa.me/919676038910](https://wa.me/919676038910)
- **LinkedIn:** [https://www.linkedin.com/in/sheraz-ahmed2k5/](https://www.linkedin.com/in/sheraz-ahmed2k5/)

## 8. Current Progress

**Completed:**

- Website structure and all eight sections.
- Initial technical audit.
- LinkedIn mobile display correction in the Contact section.
- SEO metadata, `src/app/sitemap.js`, and `src/app/robots.js` implementation.
- Recent `npm run lint` and production `npm run build` checks passed.

**Pending:**

1. Responsive visual audit at 1440px, 1366px, 768px, 390px, and 360px.
2. Functional browser testing.
3. Design refinement based on actual findings.
4. Portfolio screenshots and working demos.
5. Contact form backend/email integration.
6. Production deployment.
7. Domain configuration and final launch testing.

## 9. Immediate Next Task

Perform the responsive visual audit. Report findings and proposed corrections first; do not make changes until the user approves the findings.

## 10. Project Paths

- **Project folder:** `C:\Users\shera\Documents\agency-projects\my-agency-website`
- **GitHub:** [https://github.com/Sheraz2005/my-agency-website](https://github.com/Sheraz2005/my-agency-website)

## 11. Development Workflow

- Inspect existing code before editing.
- Make incremental changes.
- Preserve approved designs.
- Avoid unnecessary dependencies.
- Do not modify unrelated components.
- Run `npm run lint` and `npm run build` after meaningful changes.
- Never commit or push without explicit permission.

**Maintenance:** Update this document when significant project milestones are completed or the next major task changes.
