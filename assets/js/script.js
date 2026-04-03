"use strict";

const cursorEl = document.getElementById("cursor");
let selectedGateway = "";

// --- CORE INITIALIZER ---
function init() {
    // 1. Sync Colors from Config
    const root = document.documentElement;
    root.style.setProperty('--primary', CONFIG.colors.primary);
    root.style.setProperty('--bg', CONFIG.colors.bg);
    root.style.setProperty('--surface', CONFIG.colors.surface);

    // 2. Load Home Content
    document.getElementById("nav-logo-text").innerHTML = `${CONFIG.owner.firstName} <span>${CONFIG.owner.lastName}</span>`;
    document.getElementById("hero-badge").innerText = CONFIG.home.badge;
    document.getElementById("hero-desc").innerText = CONFIG.home.description;
    document.getElementById("contact-btn").href = `mailto:${CONFIG.owner.email}`;
    
    // 3. Load Section Headers
    document.getElementById("repo-title").innerText = CONFIG.sections.repo.title;
    document.getElementById("repo-subtitle").innerText = CONFIG.sections.repo.subtitle;
    document.getElementById("about-title").innerText = CONFIG.sections.about.title;
    document.getElementById("faq-title").innerText = CONFIG.sections.faq.title;
    document.getElementById("faq-subtitle").innerText = CONFIG.sections.faq.subtitle;
    document.getElementById("footer-text").innerText = CONFIG.home.footer;

    // 4. Render Dynamic Components
    renderMenu();
    renderAbout();
    renderProducts(CONFIG.products);
    renderFAQ();
    renderPaymentMethods();
    
    // Start Typewriter
    typeWriter(CONFIG.home.heroTitle, 0);
}

// --- RENDERING ENGINES ---
function renderMenu() {
    const box = document.getElementById("social-links");
    box.innerHTML = CONFIG.menu.map(m => `
        <a href="#${m.id}" onclick="navigateTo('${m.id}'); return false;" 
           style="padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); font-weight:700;">
           ${m.label.toUpperCase()}
        </a>
    `).join('');
}

function renderAbout() {
    const grid = document.getElementById("about-grid");
    grid.innerHTML = CONFIG.aboutCards.map(c => `
        <article class="card">
            <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 1.5rem;">${c.title}</h3>
            <p style="color: var(--text-dim)">${c.desc}</p>
        </article>
    `).join('');
}

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:50px; opacity:0.5;">No Assets Found</div>`;
        return;
    }
    grid.innerHTML = data.map((p, i) => `
        <article class="card">
            <div class="ev-video-bg ai-vid-${(i % 8) + 1}"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" loading="lazy">
            <h3 style="position:relative; z-index:2; margin-bottom:10px;">${p.name}</h3>
            <p style="position:relative; z-index:2; color:var(--text-dim); margin-bottom:25px; font-size:0.9rem;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        </article>
    `).join('');
}

function renderFAQ() {
    const grid = document.getElementById("faq-grid");
    grid.innerHTML = CONFIG.faq.map((f, i) => `
        <article class="card">
            <div class="ev-video-bg ai-vid-${(i % 4) + 1}" style="opacity:0.05"></div>
            <h3 style="color:var(--text-main); margin-bottom:15px; font-size:1.05rem; position:relative; z-index:2;">
                <span style="color:var(--primary); font-style:italic;">Q.</span> ${f.q}
            </h3>
            <p style="color:var(--text-dim); font-size:0.85rem; position:relative; z-index:2; line-height:1.8; padding-left:20px; border-left:1px solid var(--border);">
                ${f.a}
            </p>
        </article>
    `).join('');
}

function renderPaymentMethods() {
    const grid = document.getElementById("payment-grid");
    selectedGateway = CONFIG.paymentMethods[0];
    grid.innerHTML = CONFIG.paymentMethods.map((m, i) => `
        <div class="method-card ${i===0?'active':''}" onclick="selectPayment('${m}', this)">
            <span>${m}</span>
        </div>
    `).join('');
}

// --- UTILITIES ---
function navigateTo(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const target = document.getElementById(id);
    if(target) {
        target.classList.add("active");
        window.scrollTo({top:0, behavior:'smooth'});
    }
    toggleMenu(true);
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = CONFIG.products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    renderProducts(filtered);
}

function openModal(n, p) {
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function selectPayment(m, el) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    selectedGateway = m;
}

function confirmInquiry() {
    const name = document.getElementById("client-name").value;
    if(!name) return alert("Verification Required.");
    const asset = document.getElementById("target-name").innerText;
    const price = document.getElementById("target-price").innerText;
    const mailBody = `CLIENT: ${name}\nASSET: ${asset}\nVALUE: ${price}\nGATEWAY: ${selectedGateway}`;
    window.location.href = `mailto:${CONFIG.owner.email}?subject=Inquiry: ${asset}&body=${encodeURIComponent(mailBody)}`;
}

function typeWriter(text, i) {
    const el = document.getElementById("hero-title");
    if (el && i <= text.length) {
        el.textContent = text.substring(0, i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

function toggleMenu(close = false, e = null) {
    if(e) e.stopPropagation();
    const d = document.getElementById("dropdown");
    if(close) d.classList.remove("active");
    else d.classList.toggle("active");
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    document.getElementById("theme-btn").innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

document.addEventListener("mousemove", (e) => {
    if(cursorEl) cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

window.addEventListener('DOMContentLoaded', init);
