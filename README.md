<div align="center">

# Kesar Kaushik — Developer Portfolio

**Next.js 15 · React 19 · Tailwind CSS · Framer Motion · Three.js**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer)](https://motion.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

<br>

[🌐 Live Demo](https://kesarkaushik.github.io/portfolio) &nbsp;·&nbsp; [📄 Resume](/public/assets/resume.html) &nbsp;·&nbsp; [🐙 GitHub](https://github.com/KesarKaushik)

</div>

---

## ✨ Overview

A modern, premium developer portfolio built with cutting-edge web technologies. Features include:

- **Glassmorphism UI** — Frosted glass cards with dynamic backdrop blur
- **Custom Cursor** — Smooth, interactive cursor with magnetic effects
- **AI Chatbot** — Conversational assistant with text-to-speech (female voice)
- **Smooth Scrolling** — Powered by Lenis for butter-smooth scroll
- **Shooting Stars** — Animated particle effects
- **Gradient Blobs** — Dynamic background gradients
- **Floating Code Snippets** — Animated code fragments
- **Loading Screen** — Animated intro with progress bar
- **Scroll Progress** — Visual scroll indicator
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Dark/Light Theme** — System-aware theme toggle

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **Animations** | [Framer Motion](https://motion.dev) |
| **Scrolling** | [Lenis](https://lenis.studiofreight.com) |
| **Fonts** | Inter, JetBrains Mono, Orbitron |
| **Icons** | React Icons |
| **Theme** | next-themes |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |

---

## 🧩 Features

### Sections

- **Hero** — Animated introduction with taglines and resume download
- **About** — Bio, stats, college info, and contribution highlights
- **Skills** — Visual skill bars with animated counts
- **Projects** — Featured project cards with GitHub and live demo links
- **Experience & Education** — Interactive timeline with grouped education/experience
- **Certifications** — LinkedIn-linked certification cards
- **GitHub Stats** — Repository and contribution metrics
- **AI Chatbot** — In-page assistant with voice output
- **Contact** — Contact form and social links

### AI Chatbot (Text-to-Speech)

- Triggered by a floating chat button (bottom-right)
- Responds to queries about skills, projects, experience, education, contact info
- **Auto-speaks responses** using the browser's SpeechSynthesis API
- Preferred **female voice** (Microsoft Zira → Samantha → Google US English → fallback)
- **Mute/Unmute** button to toggle voice output
- Previous speech is cancelled before new response

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/KesarKaushik/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, animations, CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page (all sections composed)
│   └── providers.tsx      # Theme provider
├── components/
│   ├── About.tsx          # About me section
│   ├── AIChatbot.tsx      # AI chat with text-to-speech
│   ├── Certificates.tsx   # Certification cards (LinkedIn links)
│   ├── Contact.tsx        # Contact section
│   ├── CustomCursor.tsx   # Interactive cursor
│   ├── Experience.tsx     # Timeline (education + experience)
│   ├── FloatingCodeSnippets.tsx  # Animated code snippets
│   ├── Footer.tsx         # Site footer
│   ├── GitHubStats.tsx    # GitHub stats and contributions
│   ├── GradientBlobs.tsx  # Animated background blobs
│   ├── Hero.tsx           # Hero section
│   ├── LoadingScreen.tsx  # Loading animation
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Project showcase cards
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── ShootingStars.tsx  # Shooting star particles
│   └── Skills.tsx         # Skills with animated bars
├── hooks/
│   ├── useMousePosition.ts
│   ├── useScrollProgress.ts
│   └── useScrollReveal.ts
└── lib/
    ├── data.ts            # All portfolio data (skills, projects, etc.)
    └── utils.ts           # Utility functions
```

---

## 🎨 Customization

All portfolio content is centralized in `src/lib/data.ts`. Edit this file to update:

- Personal info, bio, taglines
- Skills with progress levels
- Project details, links, badges
- Experience & education entries
- Certifications with LinkedIn URLs
- Navigation links

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by Kesar Kaushik

</div>

