# ProgNest — Official Website

> **Learn to Code. Build Your Future.**  
> The official, modern, responsive website for **ProgNest**, a programming education Android application built with Android Studio & Kotlin and distributed via the **Indus App Store**.

---

## 📱 About ProgNest

ProgNest is an Android programming education app designed to make learning to code structured, approachable, and consistent. It focuses on organised learning, practical code examples, topic quizzes, daily problem-solving challenges, and habit-building streak tracking for students and self-learners.

- **Platform:** Android (8.0+ Oreo or higher)
- **Technology:** Android Studio & Kotlin
- **Distribution:** Indus App Store
- **Current Curriculums:** Java & C++

---

## 🚀 Live Demo & Tech Stack

This website is built with:

- **React 19** + **Vite 8**
- **Vanilla CSS3** Design System (Deep Charcoal, Dark Navy, Royal Blue `#2563EB`, Purple `#7C3AED`, and Cyan `#06B6D4` accents)
- **Lucide Icons** (`lucide-react`)
- **Interactive UI Mockups** (Realistic Android phone frame with live interactive tabs)
- **SEO & Social Sharing Ready** (`sitemap.xml`, `robots.txt`, `manifest.json`, OpenGraph metadata)
- **100% Free Static Hosting Ready** (Zero server costs, instant deploy to Cloudflare Pages, Vercel, Netlify, or GitHub Pages)

---

## 📂 Project Structure

```text
prognest-website/
├── public/
│   ├── app-logo.png          # Official ProgNest App Logo
│   ├── favicon.svg           # High-resolution brand favicon
│   ├── logo.svg              # Full vector brand emblem
│   ├── manifest.json         # PWA / web app manifest
│   ├── robots.txt            # Search engine crawler instructions
│   ├── sitemap.xml           # XML Sitemap with page priorities
│   └── 404.html              # SPA routing fallback for GitHub Pages
├── src/
│   ├── assets/
│   │   └── app-logo.png      # Bundled official logo asset
│   ├── config/
│   │   └── siteConfig.js     # Central configuration file (URLs, contacts, copy)
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky responsive navbar with mobile drawer
│   │   ├── Hero.jsx          # Hero section with CTA & phone mockup
│   │   ├── PhoneMockup.jsx   # Interactive Android smartphone UI component
│   │   ├── Features.jsx      # 8 authentic application feature cards
│   │   ├── Learning.jsx      # Java & C++ curriculum explorer & code view
│   │   ├── HowItWorks.jsx    # 6-step visual progression guide
│   │   ├── About.jsx         # App overview, mission statement, verified specs
│   │   ├── AppPreview.jsx    # Interactive 5-screen app preview gallery
│   │   ├── DownloadCTA.jsx   # Prominent Indus App Store download banner
│   │   ├── Faq.jsx           # Accessible 8-question accordion with filter
│   │   ├── Contact.jsx       # Email contact card & validated dispatch form
│   │   └── Footer.jsx        # Links, copyright, Indus link, back-to-top
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx # Comprehensive student privacy policy
│   │   ├── TermsOfUse.jsx    # Educational software terms of use
│   │   └── NotFound.jsx      # Custom 404 page
│   ├── App.jsx               # Main layout & client-side route manager
│   ├── index.css             # Complete design system tokens & utilities
│   └── main.jsx              # React DOM entry point
├── vercel.json               # Vercel SPA rewrite rule
├── vite.config.js            # Vite bundler configuration
└── package.json              # Project dependencies & scripts
```

---

## 🛠️ Quick Start & Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### 4. Test Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Configuration (`src/config/siteConfig.js`)

All critical links, store URLs, and contact details are centralized in `src/config/siteConfig.js`. Before publishing your website, review and replace the following fields:

```javascript
export const siteConfig = {
  urls: {
    // Official Indus App Store URL (configured)
    indusAppStore: "https://indusapp.store/1cdovgl4",

    // Official support & feedback email (configured)
    contactEmail: "feedback.prognest.com@gmail.com",

    // [ACTION REQUIRED]: Replace with your published website domain when deployed
    websiteUrl: "https://prognest.pages.dev",
  },
  ...
};
```

---

## 🌐 Free Hosting Deployment Guide

This website is a static single-page application (SPA). You do not need to pay for any hosting or backend services. You can deploy it for **100% free** on any of the following platforms using their free subdomains.

### Option A: Cloudflare Pages (Recommended - Fastest & 100% Free)
1. Push this project to a GitHub repository.
2. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the build configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Cloudflare provides a free `https://<project-name>.pages.dev` domain with free SSL!

*(Cloudflare Pages automatically handles Single Page Application routing to index.html with no redirects configuration needed).*

---

### Option B: Vercel (100% Free)
1. Install Vercel CLI (`npm i -g vercel`) or visit [vercel.com](https://vercel.com).
2. Import your GitHub repository.
3. Vercel automatically detects Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
5. Vercel gives you a free `https://<project-name>.vercel.app` domain.

*(The included `vercel.json` file automatically handles single-page routing).*

---

### Option C: Netlify (100% Free)
1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project** from GitHub.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.
5. Netlify assigns a free `https://<project-name>.netlify.app` domain.

*(The included `public/_redirects` file automatically handles single-page routing).*

---

### Option D: GitHub Pages (100% Free)
1. In `vite.config.js`, set the base path if your repository is not at root:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // or './' for relative paths
     plugins: [react()],
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist/` folder using the `gh-pages` tool or GitHub Actions workflow.
4. *(The included `public/404.html` automatically handles SPA routing fallback for direct URL refreshes).*

---

## 📋 Final Pre-Publishing Checklist

Before making your website public, ensure you have:

- [ ] Updated `indusAppStore` URL in `src/config/siteConfig.js` with your official listing link.
- [ ] Updated `contactEmail` in `src/config/siteConfig.js` with your actual support inbox.
- [ ] Verified that `app-logo.png` is displayed in `public/app-logo.png`.
- [ ] Updated `websiteUrl` in `src/config/siteConfig.js`, `index.html` (canonical & og:url tags), and `public/robots.txt` / `public/sitemap.xml` with your published domain.
- [ ] Tested the contact form mailto behavior with your local email client.
- [ ] Reviewed `src/pages/PrivacyPolicy.jsx` and `src/pages/TermsOfUse.jsx` to ensure any custom clauses align with your app version.
- [ ] (Optional) Placed real app screenshots into `public/screenshots/` and referenced them in `siteConfig.appScreenshots` when ready.

---

## 📄 License & Attribution

- Built for **ProgNest** programming education.
- Distributed on the **Indus App Store**.
- All content and code created for student learning.
