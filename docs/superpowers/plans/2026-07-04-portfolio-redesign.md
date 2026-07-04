# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild https://ardamiracseckin.github.io/ as a modern dark-themed, bilingual (TR/EN), animated single-page portfolio using plain HTML/CSS/JS.

**Architecture:** Static site, three files (`index.html`, `style.css`, `script.js`) plus existing `cv_foto.jpg`. All text is keyed with `data-i18n` attributes; a translation dictionary in `script.js` swaps languages instantly. Featured projects are hardcoded (bilingual descriptions); remaining repos load from the GitHub API. No build step.

**Tech Stack:** HTML5, CSS3 (custom properties, IntersectionObserver reveal animations), vanilla JS, marked.js (CDN) for README rendering, Google Fonts Inter.

**Repo:** local clone at `/Users/miracardaseckin/Desktop/claude deneme 1/portfolio` (origin = ardamiracseckin/ardamiracseckin.github.io, branch `main`).

## Global Constraints

- Must work as pure static files on GitHub Pages — no build step, no npm.
- Default language: **English**; toggle persists in `localStorage` under key `lang`.
- Auto-repo list excludes: `ardamiracseckin`, `ardamiracseckin.github.io`, and the 4 featured repos (`PriceGuard`, `Smart-Stadium-IoT-Simulation`, `English-News-Classification`, `Two-Pass-Compiler-Project`).
- Only external resources: Google Fonts (Inter), marked.js CDN, GitHub API, `avatars.githubusercontent.com`.
- Keep `cv_foto.jpg` untouched. `index.html` is fully replaced.
- Verification is browser-based (preview tools), not unit tests — this is a static page with no test framework.
- Do NOT push to origin until the user explicitly approves (Task 5).

---

### Task 1: New `index.html`

**Files:**
- Modify (full replace): `index.html`

**Interfaces:**
- Produces: element IDs consumed by `script.js`: `lang-toggle`, `typing-text`, `featured-grid`, `repos-grid`, `readme-modal`, `readme-content`, `modal-repo-link`, `modal-close`. All translatable elements carry `data-i18n="<key>"`. Sections with class `reveal` get scroll animations.

- [ ] **Step 1: Replace `index.html` with the following content**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Miraç Arda Seçkin — Software Engineering student portfolio. Backend & AI projects.">
    <title>Miraç Arda Seçkin | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>

    <nav>
        <div class="nav-inner">
            <a href="#" class="logo">&lt;MAS /&gt;</a>
            <div class="nav-links">
                <a href="#about" data-i18n="nav.about">About</a>
                <a href="#skills" data-i18n="nav.skills">Skills</a>
                <a href="#projects" data-i18n="nav.projects">Projects</a>
                <a href="#contact" data-i18n="nav.contact">Contact</a>
                <button id="lang-toggle" title="Change language">TR</button>
            </div>
        </div>
    </nav>

    <header class="hero">
        <div class="hero-text">
            <p class="hero-greeting" data-i18n="hero.greeting">Hi, I'm</p>
            <h1 class="gradient-text">Miraç Arda Seçkin</h1>
            <p class="typing"><span id="typing-text"></span><span class="cursor">|</span></p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary" data-i18n="hero.cta_projects">View My Projects</a>
                <a href="#contact" class="btn btn-outline" data-i18n="hero.cta_contact">Get In Touch</a>
            </div>
        </div>
        <div class="hero-photo">
            <img src="cv_foto.jpg" alt="Miraç Arda Seçkin">
        </div>
    </header>

    <main>
        <section id="about" class="reveal">
            <h2 data-i18n="about.title">About Me</h2>
            <p class="about-text" data-i18n="about.text"></p>
        </section>

        <section id="skills" class="reveal">
            <h2 data-i18n="skills.title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3 data-i18n="skills.languages">Programming Languages</h3>
                    <div class="badges">
                        <span class="badge">Python</span>
                        <span class="badge">Java</span>
                        <span class="badge">C#</span>
                        <span class="badge">JavaScript</span>
                        <span class="badge">HTML5 &amp; CSS3</span>
                    </div>
                </div>
                <div class="skill-card">
                    <h3 data-i18n="skills.ai">AI &amp; Data</h3>
                    <div class="badges">
                        <span class="badge">NLP</span>
                        <span class="badge">OCR</span>
                        <span class="badge">Deep Learning</span>
                        <span class="badge">Machine Learning</span>
                        <span class="badge">PyTorch</span>
                        <span class="badge">Hugging Face</span>
                        <span class="badge">Jupyter</span>
                    </div>
                </div>
                <div class="skill-card">
                    <h3 data-i18n="skills.tools">Tools &amp; Concepts</h3>
                    <div class="badges">
                        <span class="badge">Git &amp; GitHub</span>
                        <span class="badge">OOP</span>
                        <span class="badge">IoT &amp; Network Simulation</span>
                        <span class="badge">Cisco Packet Tracer</span>
                        <span class="badge">Claude</span>
                        <span class="badge">Gemini</span>
                        <span class="badge">GitHub Copilot</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="reveal">
            <h2 data-i18n="projects.title">Featured Projects</h2>
            <div id="featured-grid" class="projects-grid"></div>
            <h2 class="other-title" data-i18n="projects.other">Other Projects</h2>
            <div id="repos-grid" class="projects-grid">
                <div class="status-msg" data-i18n="projects.loading">Loading projects from GitHub...</div>
            </div>
        </section>

        <section id="contact" class="reveal">
            <h2 data-i18n="contact.title">Get In Touch</h2>
            <p class="about-text" data-i18n="contact.text"></p>
            <div class="contact-buttons">
                <a class="contact-btn" href="mailto:ardamirac.seckin@gmail.com">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <span>ardamirac.seckin@gmail.com</span>
                </a>
                <a class="contact-btn" href="https://github.com/ardamiracseckin" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    <span>GitHub</span>
                </a>
                <a class="contact-btn" href="https://www.linkedin.com/in/mira%C3%A7-arda-se%C3%A7kin-8198523b2/" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    </main>

    <footer><span data-i18n="footer.text">© 2026 Miraç Arda Seçkin</span></footer>

    <div id="readme-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="close-btn" id="modal-close">&times;</span>
            <div id="readme-content" class="markdown-body"></div>
            <div class="modal-footer">
                <a href="#" id="modal-repo-link" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="modal.viewRepo">View Repository on GitHub →</a>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Sanity check**

Run: `ls "/Users/miracardaseckin/Desktop/claude deneme 1/portfolio"`
Expected: `index.html`, `README.md`, `cv_foto.jpg`, `docs/` present. `grep -c 'data-i18n' index.html` returns ≥ 15.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: new page structure with i18n keys and sections"
```

---

### Task 2: `style.css`

**Files:**
- Create: `style.css`

**Interfaces:**
- Consumes: class/ID names from Task 1.
- Produces: classes used by `script.js` when generating cards: `project-card`, `project-desc`, `tags`, `tag`, `project-links`, `project-link`, `btn-readme`, `status-msg`, and `modal-overlay.open` (JS toggles the `open` class).

- [ ] **Step 1: Create `style.css` with the following content**

```css
:root {
    --bg: #0a0e1a;
    --bg-card: #111527;
    --border: #232a45;
    --text: #e6e9f2;
    --text-muted: #9aa3b8;
    --accent-1: #8b5cf6;
    --accent-2: #3b82f6;
    --gradient: linear-gradient(135deg, #8b5cf6, #3b82f6);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
}

/* Animated background glows */
.bg-glow { position: fixed; border-radius: 50%; filter: blur(120px); opacity: 0.22; z-index: -1; pointer-events: none; }
.bg-glow-1 { width: 500px; height: 500px; background: var(--accent-1); top: -150px; right: -100px; animation: drift 18s ease-in-out infinite alternate; }
.bg-glow-2 { width: 420px; height: 420px; background: var(--accent-2); bottom: -120px; left: -120px; animation: drift 24s ease-in-out infinite alternate-reverse; }
@keyframes drift { from { transform: translate(0, 0); } to { transform: translate(60px, 40px); } }

/* Navigation */
nav { position: sticky; top: 0; z-index: 100; background: rgba(10, 14, 26, 0.72); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1100px; margin: 0 auto; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: 800; font-size: 1.15rem; text-decoration: none; background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.nav-links { display: flex; align-items: center; }
.nav-links a { color: var(--text-muted); text-decoration: none; margin-left: 22px; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }
#lang-toggle { margin-left: 22px; background: var(--bg-card); color: var(--text); border: 1px solid var(--border); border-radius: 8px; padding: 6px 14px; cursor: pointer; font-weight: 600; font-family: inherit; font-size: 0.9rem; transition: border-color 0.2s, transform 0.2s; }
#lang-toggle:hover { border-color: var(--accent-1); transform: translateY(-1px); }

/* Hero */
.hero { max-width: 1100px; margin: 0 auto; padding: 90px 24px 70px; display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.hero-greeting { color: var(--accent-2); font-weight: 600; margin: 0; font-size: 1.1rem; }
.hero h1 { font-size: 3.2rem; margin: 8px 0 12px; line-height: 1.15; }
.gradient-text { background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.typing { font-size: 1.35rem; color: var(--text-muted); min-height: 1.8em; margin: 0 0 28px; }
.cursor { color: var(--accent-2); animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; }
.btn { display: inline-block; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.95rem; transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
.btn-primary { background: var(--gradient); color: #fff; box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(99, 102, 241, 0.5); }
.btn-outline { border: 1px solid var(--border); color: var(--text); }
.btn-outline:hover { border-color: var(--accent-1); transform: translateY(-2px); }
.hero-photo { flex-shrink: 0; padding: 5px; border-radius: 50%; background: var(--gradient); box-shadow: 0 0 60px rgba(99, 102, 241, 0.35); }
.hero-photo img { display: block; width: 230px; height: 230px; border-radius: 50%; object-fit: cover; }

/* Sections */
section { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
section h2 { font-size: 1.9rem; margin: 0 0 28px; }
section h2::after { content: ''; display: block; width: 64px; height: 4px; background: var(--gradient); border-radius: 2px; margin-top: 10px; }
.about-text { color: var(--text-muted); font-size: 1.05rem; max-width: 800px; margin: 0 0 24px; }

/* Scroll reveal */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* Skills */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.skill-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; }
.skill-card:hover { border-color: var(--accent-1); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15); }
.skill-card h3 { margin: 0 0 16px; font-size: 1.1rem; }
.badges, .tags { display: flex; flex-wrap: wrap; gap: 8px; }
.badge { background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 999px; font-size: 0.85rem; font-weight: 500; }

/* Projects */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.other-title { margin-top: 56px; }
.project-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 26px; display: flex; flex-direction: column; gap: 14px; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; }
.project-card:hover { border-color: var(--accent-1); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15); }
.project-card h3 { margin: 0; font-size: 1.25rem; color: #f0f4ff; }
.project-desc { color: var(--text-muted); font-size: 0.95rem; margin: 0; flex: 1; }
.tag { background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); color: #93c5fd; padding: 4px 10px; border-radius: 999px; font-size: 0.78rem; font-weight: 500; }
.project-links { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.project-link { color: var(--accent-2); text-decoration: none; font-weight: 600; font-size: 0.9rem; }
.project-link:hover { text-decoration: underline; }
.project-meta { color: var(--text-muted); font-size: 0.85rem; display: flex; gap: 14px; }
.btn-readme { background: transparent; color: var(--text); border: 1px solid var(--border); padding: 10px 14px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 500; font-family: inherit; text-align: left; display: flex; justify-content: space-between; transition: border-color 0.2s, color 0.2s; }
.btn-readme:hover { border-color: var(--accent-2); color: var(--accent-2); }
.status-msg { grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 30px 0; font-size: 1rem; }

/* Contact */
.contact-buttons { display: flex; flex-wrap: wrap; gap: 16px; }
.contact-btn { display: flex; align-items: center; gap: 10px; background: var(--bg-card); border: 1px solid var(--border); padding: 14px 22px; border-radius: 12px; color: var(--text); text-decoration: none; font-weight: 500; transition: transform 0.25s, border-color 0.25s; }
.contact-btn:hover { border-color: var(--accent-1); transform: translateY(-3px); }
.contact-btn svg { width: 20px; height: 20px; fill: currentColor; flex-shrink: 0; }

footer { text-align: center; color: var(--text-muted); padding: 30px 20px; border-top: 1px solid var(--border); font-size: 0.9rem; margin-top: 40px; }

/* Modal */
.modal-overlay { display: none; position: fixed; inset: 0; background: rgba(4, 6, 12, 0.82); z-index: 1000; justify-content: center; align-items: center; padding: 20px; }
.modal-overlay.open { display: flex; }
.modal-content { background: var(--bg); width: 100%; max-width: 850px; max-height: 85vh; border: 1px solid var(--border); border-radius: 14px; padding: 30px; overflow-y: auto; position: relative; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6); }
.close-btn { position: absolute; top: 14px; right: 20px; font-size: 1.8rem; cursor: pointer; color: var(--text-muted); line-height: 1; }
.close-btn:hover { color: #fff; }
.modal-footer { margin-top: 30px; border-top: 1px solid var(--border); padding-top: 20px; text-align: right; }

/* Markdown (README) content */
.markdown-body { line-height: 1.6; font-size: 0.95rem; }
.markdown-body h1, .markdown-body h2, .markdown-body h3 { color: #f0f4ff; border-bottom: 1px solid var(--border); padding-bottom: 5px; margin-top: 20px; }
.markdown-body img { max-width: 100%; border-radius: 6px; margin: 15px 0; border: 1px solid var(--border); display: block; }
.markdown-body code { background: var(--bg-card); padding: 2px 5px; border-radius: 4px; color: #f0a3a3; font-family: monospace; }
.markdown-body pre { background: var(--bg-card); padding: 15px; border-radius: 6px; overflow-x: auto; border: 1px solid var(--border); }
.markdown-body pre code { background: none; padding: 0; color: var(--text); }
.markdown-body a { color: var(--accent-2); text-decoration: none; }

/* Responsive */
@media (max-width: 768px) {
    .hero { flex-direction: column-reverse; text-align: center; padding-top: 50px; }
    .hero h1 { font-size: 2.3rem; }
    .hero-buttons { justify-content: center; }
    .hero-photo img { width: 180px; height: 180px; }
    section { padding: 44px 20px; }
}
@media (max-width: 640px) {
    .nav-links a { display: none; }
    .contact-btn { width: 100%; justify-content: center; }
}
```

- [ ] **Step 2: Commit**

```bash
git add style.css
git commit -m "feat: modern dark theme styles with animations"
```

---

### Task 3: `script.js` (i18n, typing, reveal, projects, modal)

**Files:**
- Create: `script.js`

**Interfaces:**
- Consumes: element IDs from Task 1, classes from Task 2.
- Produces: self-initializing script; exposes nothing globally except event listeners.

- [ ] **Step 1: Create `script.js` with the following content**

```javascript
// ===== Translations =====
const translations = {
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.greeting": "Hi, I'm",
        "hero.cta_projects": "View My Projects",
        "hero.cta_contact": "Get In Touch",
        "about.title": "About Me",
        "about.text": "I'm a 3rd-year Software Engineering student focused on backend development and artificial intelligence. I enjoy turning ideas into working software — from deep-learning NLP models and OCR systems to IoT network simulations and automation bots. I care about clean, object-oriented code and actively use modern AI tools to speed up and improve my development workflow. I'm currently looking for opportunities to grow as an engineer and contribute to real-world projects.",
        "skills.title": "Technical Skills",
        "skills.languages": "Programming Languages",
        "skills.ai": "AI & Data",
        "skills.tools": "Tools & Concepts",
        "projects.title": "Featured Projects",
        "projects.other": "Other Projects",
        "projects.viewGithub": "View on GitHub →",
        "projects.readme": "📖 Project Details",
        "projects.loading": "Loading projects from GitHub...",
        "projects.error": "Couldn't reach GitHub right now — please refresh in a minute.",
        "projects.empty": "No other public repositories yet.",
        "modal.viewRepo": "View Repository on GitHub →",
        "modal.loading": "Loading documentation...",
        "modal.noReadme": "No README found for this project.",
        "contact.title": "Get In Touch",
        "contact.text": "Feel free to reach out — I'm open to internship opportunities, collaboration and new ideas.",
        "footer.text": "© 2026 Miraç Arda Seçkin — built with plain HTML, CSS & JavaScript"
    },
    tr: {
        "nav.about": "Hakkımda",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "hero.greeting": "Merhaba, ben",
        "hero.cta_projects": "Projelerime Göz At",
        "hero.cta_contact": "Bana Ulaş",
        "about.title": "Hakkımda",
        "about.text": "Yazılım Mühendisliği 3. sınıf öğrencisiyim; backend geliştirme ve yapay zekâya odaklanıyorum. Derin öğrenme tabanlı NLP modellerinden OCR sistemlerine, IoT ağ simülasyonlarından otomasyon botlarına kadar fikirleri çalışan yazılımlara dönüştürmekten keyif alıyorum. Temiz ve nesne yönelimli koda önem veriyor, geliştirme sürecimi hızlandırmak için modern yapay zekâ araçlarını aktif olarak kullanıyorum. Mühendis olarak gelişebileceğim ve gerçek projelere katkı sağlayabileceğim fırsatlar arıyorum.",
        "skills.title": "Teknik Yetenekler",
        "skills.languages": "Programlama Dilleri",
        "skills.ai": "Yapay Zekâ & Veri",
        "skills.tools": "Araçlar & Kavramlar",
        "projects.title": "Öne Çıkan Projeler",
        "projects.other": "Diğer Projeler",
        "projects.viewGithub": "GitHub'da Gör →",
        "projects.readme": "📖 Proje Detayları",
        "projects.loading": "Projeler GitHub'dan yükleniyor...",
        "projects.error": "GitHub'a şu anda ulaşılamıyor — lütfen bir dakika sonra sayfayı yenileyin.",
        "projects.empty": "Henüz başka public proje yok.",
        "modal.viewRepo": "Projeyi GitHub'da Aç →",
        "modal.loading": "Dokümantasyon yükleniyor...",
        "modal.noReadme": "Bu proje için README bulunamadı.",
        "contact.title": "Bana Ulaş",
        "contact.text": "Bana ulaşmaktan çekinme — staj fırsatlarına, iş birliklerine ve yeni fikirlere açığım.",
        "footer.text": "© 2026 Miraç Arda Seçkin — sade HTML, CSS ve JavaScript ile yapıldı"
    }
};

const typingPhrases = {
    en: ["Software Engineering Student", "Backend & AI Developer", "Lifelong Learner"],
    tr: ["Yazılım Mühendisliği Öğrencisi", "Backend & Yapay Zekâ Geliştiricisi", "Öğrenmeye Tutkulu"]
};

// ===== Featured projects (hand-written, bilingual) =====
const featuredProjects = [
    {
        name: "PriceGuard",
        url: "https://github.com/ardamiracseckin/PriceGuard",
        tags: ["Python", "Web Scraping", "BeautifulSoup", "SMTP", "OOP"],
        desc: {
            en: "An automated price-tracking bot for e-commerce sites. It scrapes product pages with BeautifulSoup, mimics a real browser via HTTP header manipulation to get past basic anti-bot protection, and sends an automatic e-mail alert the moment a product drops below your target price. Built on a clean, object-oriented architecture.",
            tr: "E-ticaret siteleri için otomatik fiyat takip botu. Ürün sayfalarını BeautifulSoup ile tarar, HTTP header manipülasyonuyla gerçek tarayıcı gibi davranarak temel anti-bot korumalarını aşar ve ürün hedef fiyatın altına düştüğü anda otomatik e-posta bildirimi gönderir. Temiz, nesne yönelimli bir mimariyle geliştirildi."
        }
    },
    {
        name: "Smart Stadium IoT Simulation",
        url: "https://github.com/ardamiracseckin/Smart-Stadium-IoT-Simulation",
        tags: ["Python", "IoT", "Cisco Packet Tracer", "Networking"],
        desc: {
            en: "A comprehensive IoT and network simulation of a smart stadium built in Cisco Packet Tracer. Python-programmed microcontrollers power automatic goal detection with a live scoreboard, motion- and light-aware smart lighting, an emergency alarm protocol and RFID door access — all connected over a local network and controllable from a central smartphone app.",
            tr: "Cisco Packet Tracer'da kurulmuş kapsamlı bir akıllı stadyum IoT ve ağ simülasyonu. Python ile programlanan mikrodenetleyiciler; canlı skorboardlu otomatik gol algılama, harekete ve ışığa duyarlı akıllı aydınlatma, acil durum alarm protokolü ve RFID kapı erişimini çalıştırır — hepsi yerel ağ üzerinden bağlıdır ve merkezi bir akıllı telefon uygulamasından kontrol edilebilir."
        }
    },
    {
        name: "English News Classification",
        url: "https://github.com/ardamiracseckin/English-News-Classification",
        tags: ["PyTorch", "Transformers", "DistilBERT", "NLP", "Scikit-Learn"],
        desc: {
            en: "An end-to-end NLP pipeline that classifies BBC News articles into five categories by fine-tuning DistilBERT. Covers exploratory data analysis, tokenization, training with the Hugging Face Trainer API and detailed evaluation with confusion matrices and learning curves — plus a live inference script that reports a confidence score for unseen text.",
            tr: "BBC haberlerini DistilBERT'i fine-tune ederek beş kategoriye ayıran uçtan uca bir NLP projesi. Keşifsel veri analizi, tokenizasyon, Hugging Face Trainer API ile eğitim ve karışıklık matrisi ile öğrenme eğrileri üzerinden detaylı değerlendirme içerir — ayrıca yeni metinler için güven skoru veren canlı bir test betiği vardır."
        }
    },
    {
        name: "Two-Pass Compiler & IDE",
        url: "https://github.com/ardamiracseckin/Two-Pass-Compiler-Project",
        tags: ["C#", ".NET 8", "Compiler Design", "Recursive Descent"],
        desc: {
            en: "A custom two-pass compiler with a real-time interpreter and a modern IDE built from scratch in C#. Pass one is a finite-state-machine lexer; pass two is a recursive-descent parser that builds an AST, enforces strong type checking with panic-mode error recovery and simulates a 32-bit memory model with a live symbol table. The IDE adds regex-based syntax highlighting and line numbering.",
            tr: "C# ile sıfırdan yazılmış, gerçek zamanlı yorumlayıcıya ve modern bir IDE'ye sahip özel bir two-pass derleyici. İlk geçiş sonlu durum makinesi tabanlı bir lexer; ikinci geçiş AST kuran, panic-mode hata kurtarmalı güçlü tip denetimi yapan ve canlı sembol tablosuyla 32-bit bellek modeli simüle eden recursive-descent bir parser. IDE'de regex tabanlı sözdizimi renklendirme ve satır numaralandırma da var."
        }
    }
];

const GITHUB_USER = "ardamiracseckin";
const EXCLUDED_REPOS = [
    "ardamiracseckin",
    "ardamiracseckin.github.io",
    "priceguard",
    "smart-stadium-iot-simulation",
    "english-news-classification",
    "two-pass-compiler-project"
];

// ===== State =====
let currentLang = localStorage.getItem("lang") || "en";
let typingTimer = null;
let cachedRepos = null;
let repoState = "loading"; // "loading" | "error" | "ok"

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

// ===== i18n =====
function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.documentElement.lang = currentLang;
    document.getElementById("lang-toggle").textContent = currentLang === "en" ? "TR" : "EN";
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations();
    renderFeatured();
    renderRepos();
    startTyping();
}

// ===== Typing effect =====
function startTyping() {
    clearTimeout(typingTimer);
    const el = document.getElementById("typing-text");
    const phrases = typingPhrases[currentLang];
    let phraseIndex = 0, charIndex = 0, deleting = false;

    function tick() {
        const phrase = phrases[phraseIndex];
        if (!deleting) {
            charIndex++;
            el.textContent = phrase.slice(0, charIndex);
            if (charIndex === phrase.length) {
                deleting = true;
                typingTimer = setTimeout(tick, 2000);
                return;
            }
            typingTimer = setTimeout(tick, 75);
        } else {
            charIndex--;
            el.textContent = phrase.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            typingTimer = setTimeout(tick, 35);
        }
    }
    el.textContent = "";
    tick();
}

// ===== Scroll reveal =====
function setupReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ===== Featured projects =====
function renderFeatured() {
    const grid = document.getElementById("featured-grid");
    grid.innerHTML = "";
    featuredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const desc = document.createElement("p");
        desc.className = "project-desc";
        desc.textContent = project.desc[currentLang];

        const tags = document.createElement("div");
        tags.className = "tags";
        project.tags.forEach(tagName => {
            const tag = document.createElement("span");
            tag.className = "tag";
            tag.textContent = tagName;
            tags.appendChild(tag);
        });

        const links = document.createElement("div");
        links.className = "project-links";
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = t("projects.viewGithub");
        links.appendChild(link);

        card.append(title, desc, tags, links);
        grid.appendChild(card);
    });
}

// ===== Other repos from GitHub API =====
async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error("GitHub API error");
        const repos = await response.json();
        cachedRepos = repos.filter(repo => !EXCLUDED_REPOS.includes(repo.name.toLowerCase()));
        repoState = "ok";
    } catch (e) {
        repoState = "error";
    }
    renderRepos();
}

function renderRepos() {
    const grid = document.getElementById("repos-grid");
    grid.innerHTML = "";

    if (repoState === "loading" || repoState === "error") {
        const msg = document.createElement("div");
        msg.className = "status-msg";
        msg.textContent = repoState === "loading" ? t("projects.loading") : t("projects.error");
        grid.appendChild(msg);
        return;
    }
    if (cachedRepos.length === 0) {
        const msg = document.createElement("div");
        msg.className = "status-msg";
        msg.textContent = t("projects.empty");
        grid.appendChild(msg);
        return;
    }

    cachedRepos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = repo.name.replace(/-/g, " ");

        const readmeBtn = document.createElement("button");
        readmeBtn.className = "btn-readme";
        readmeBtn.innerHTML = `<span>${t("projects.readme")}</span><span>+</span>`;
        readmeBtn.addEventListener("click", () => openReadme(repo.name, repo.html_url, repo.default_branch));

        const links = document.createElement("div");
        links.className = "project-links";
        const meta = document.createElement("div");
        meta.className = "project-meta";
        meta.textContent = [repo.language, `⭐ ${repo.stargazers_count}`].filter(Boolean).join("  ·  ");
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = t("projects.viewGithub");
        links.append(meta, link);

        card.append(title, readmeBtn, links);
        grid.appendChild(card);
    });
}

// ===== README modal =====
async function openReadme(repoName, repoUrl, defaultBranch) {
    const modal = document.getElementById("readme-modal");
    const contentDiv = document.getElementById("readme-content");
    document.getElementById("modal-repo-link").href = repoUrl;

    modal.classList.add("open");
    contentDiv.innerHTML = `<div class="status-msg">${t("modal.loading")}</div>`;

    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`, {
            headers: { "Accept": "application/vnd.github.v3.raw" }
        });
        if (!response.ok) {
            contentDiv.innerHTML = `<div class="status-msg">${t("modal.noReadme")}</div>`;
            return;
        }
        const markdownText = await response.text();
        let htmlContent = marked.parse(markdownText);
        // Fix relative image paths so README images load from raw.githubusercontent.com
        htmlContent = htmlContent.replace(/src="(?!http)([^"]+)"/g,
            `src="https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${defaultBranch}/$1"`);
        contentDiv.innerHTML = htmlContent;
    } catch (e) {
        contentDiv.innerHTML = `<div class="status-msg">${t("projects.error")}</div>`;
    }
}

function setupModal() {
    const modal = document.getElementById("readme-modal");
    modal.addEventListener("click", event => {
        if (event.target === modal) modal.classList.remove("open");
    });
    document.getElementById("modal-close").addEventListener("click", () => {
        modal.classList.remove("open");
    });
}

// ===== Init =====
document.getElementById("lang-toggle").addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "tr" : "en");
});

applyTranslations();
renderFeatured();
renderRepos();
startTyping();
setupReveal();
setupModal();
fetchRepos();
```

- [ ] **Step 2: Commit**

```bash
git add script.js
git commit -m "feat: i18n, typing effect, scroll reveal, GitHub projects and README modal"
```

---

### Task 4: Local verification in the browser

**Files:**
- Create: `.claude/launch.json` in the session working directory (NOT committed to the portfolio repo):

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "portfolio",
      "runtimeExecutable": "python3",
      "runtimeArgs": ["-m", "http.server", "4173", "--directory", "/Users/miracardaseckin/Desktop/claude deneme 1/portfolio"],
      "port": 4173
    }
  ]
}
```

- [ ] **Step 1: Start preview server** (`preview_start` with name `portfolio`)
- [ ] **Step 2: Check console** — `preview_console_logs` level `error`. Expected: no errors.
- [ ] **Step 3: Check structure** — `preview_snapshot`. Expected: hero with name, About/Skills/Projects/Contact sections, 4 featured project cards, other-repos grid populated (ecommerce-product-page, fatura-takip, Myproject_EkleGelsin present; the 4 featured + profile + site repos absent).
- [ ] **Step 4: Test TR/EN toggle** — `preview_click` on `#lang-toggle`, then `preview_snapshot`. Expected: headings switch to Turkish ("Hakkımda", "Öne Çıkan Projeler"...). Click again to return to EN. Also `preview_eval` `localStorage.getItem('lang')` reflects choice.
- [ ] **Step 5: Test README modal** — `preview_click` on first `.btn-readme`, `preview_snapshot` shows README content, close via `#modal-close`.
- [ ] **Step 6: Mobile check** — `preview_resize` preset `mobile`, `preview_screenshot`. Expected: single column, photo above name, no horizontal overflow.
- [ ] **Step 7: Desktop screenshot for the user** — `preview_resize` desktop + `preview_screenshot`.
- [ ] **Step 8: Fix any issues found, commit fixes**

```bash
git add -A
git commit -m "fix: polish issues found during browser verification"
```

(Skip the commit if nothing needed fixing.)

---

### Task 5: Publish to GitHub Pages (USER APPROVAL GATE)

- [ ] **Step 1: Show the user the preview screenshots and ask for approval to publish.** Do not push without an explicit yes.
- [ ] **Step 2: Push**

```bash
cd "/Users/miracardaseckin/Desktop/claude deneme 1/portfolio"
git push origin main
```

Note: push uses the user's local git credentials. If authentication fails, ask the user to run `gh auth login` or configure credentials — do not work around it.

- [ ] **Step 3: Verify live site** — wait ~2 minutes for Pages deploy, then:

```bash
curl -s -o /dev/null -w "%{http_code}" https://ardamiracseckin.github.io/
```

Expected: `200`. Then fetch the page and confirm it contains `lang-toggle`:

```bash
curl -s https://ardamiracseckin.github.io/ | grep -c "lang-toggle"
```

Expected: ≥ 1.
