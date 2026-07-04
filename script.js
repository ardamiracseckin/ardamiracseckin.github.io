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
