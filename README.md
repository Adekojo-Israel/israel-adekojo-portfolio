# Israel Adekojo — Portfolio

A responsive portfolio presenting Israel Adekojo as a web developer and digital creator focused on responsive interfaces, interactive web applications, practical problem-solving and useful digital products. Built with HTML, CSS and JavaScript; no framework or package installation is required.

## Files
- `index.html` — content, SEO metadata, sections and navigation.
- `style.css` — layout, responsive styles, colour themes, animations and mobile navigation.
- `script.js` — project cards, filters, case-study dialogs, theme switching, quick navigation and contact links.
- `favicon.svg` — browser tab icon.

## Run locally
1. Keep all four files in the same project folder.
2. Open `index.html` in a browser or run it through SPCK preview / VS Code Live Server.
3. Test the mobile menu, theme toggle, project filters, project notes, WhatsApp links and contact buttons.

## WhatsApp contact
The WhatsApp number is configured as `https://wa.me/2348087501784`. The number is formatted internationally with no `+`, spaces or dashes in the URL. The WhatsApp link appears in the hero, mobile navigation and contact section. To change it, edit `PORTFOLIO.whatsapp` at the top of `script.js` and update any static `data-whatsapp-link` URLs in `index.html` if you want the fallback URL changed too.

## Personalise before publishing
At the top of `script.js`, update:
- `email` — your real contact email.
- `github` — your real GitHub profile URL.
- `linkedin` — confirm the profile URL is correct.
- `whatsapp` — your WhatsApp URL.
- `portrait` — optional direct URL for your own portrait.

Replace the temporary portrait with your own photo before publishing. The current portrait and Google Fonts need internet access.

## Projects and honesty
Learnova is marked in development. Student Score Calculator is planned, and Taskflow is a concept to build. These are not presented as finished or deployed apps. As you build them, update their descriptions, status, case notes, demo URLs and repository URLs in the `projects` array in `script.js` to reflect what you have actually implemented and tested.

## Positioning and capabilities
The portfolio communicates outcomes as well as tools: responsive websites, interactive web applications, interface logic, accessibility-aware UX, API/data integration, debugging, testing and delivery. HTML, CSS and JavaScript remain visible as core technologies, but they are not the whole value proposition. Review every listed capability before publishing and remove anything you cannot confidently demonstrate. The portfolio intentionally avoids fake percentage proficiency meters and unsupported claims of production experience.

## Publish
You can use GitHub Pages or another static host. Before publishing:
1. Add a real email and GitHub profile.
2. Replace the temporary portrait.
3. Test every contact link on mobile and desktop.
4. Test keyboard navigation, dark/light themes and reduced-motion behaviour.
5. Add real project demos only after they work.
6. Never place passwords, private tokens or API secrets in public front-end code.

No analytics or tracking is included. The contact links open external apps/sites; they do not send data to a private database.
