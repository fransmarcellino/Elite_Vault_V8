"use strict";

const VAULT_DATA = {
    owner: { firstName: "FRANS", lastName: "MARCELLINO", email: "fransmarselinosroyer@gmail.com" },
    content: { heroTitle: "Architecting Digital Sovereignty.", footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "assets/img/Titan Core.webp" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "assets/img/Quantum UI.webp" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "assets/img/SecureAuth X.webp" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "assets/img/Nebula AI.webp" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "assets/img/Apex CMS.webp" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "assets/img/Zenith ERP.webp" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "assets/img/Vortex DB.webp" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "assets/img/Cipher Mesh.webp" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" },
        { label: "FAQ", id: "faq" }
    ],
    faq: [
        { q: "How is performance verified?", a: "Optimized for maximum Google PageSpeed scores and W3C Validated." },
        { q: "What's in the package?", a: "ZIP Archive with Source Code, README, and License." },
        { q: "Legal restrictions?", a: "Personal/Client use only. Reselling is prohibited." },
        { q: "Payment security?", a: "Managed via SSL/TLS encrypted global gateways." },
        { q: "Why Email?", a: "To ensure private, secure acquisition protocols." },
        { q: "Contact?", a: "Email operator at: fransmarselinosroyer@gmail.com" }
    ]
};

let curN = "", curP = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

// --- OPTIMIZED CURSOR (Pencegahan Layout Thrashing) ---
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    const target = document.getElementById(id);
    if (target) {
        target.style.display = "block";
        window.requestAnimationFrame(() => target.classList.add("active"));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu(true);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;
    if (forceClose || dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        setTimeout(() => { if(!dropdown.classList.contains("active")) dropdown.style.display = "none"; }, 300);
    } else {
        dropdown.style.display = "block";
        window.requestAnimationFrame(() => dropdown.classList.add("active"));
    }
}

function typeWriter(text, i) {
    const el = document.getElementById("hero-title");
    if (el && i <= text.length) {
        el.textContent = text.substring(0, i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    const fragment = document.createDocumentFragment();
    const aiClasses = ["ai-vid-1", "ai-vid-2", "ai-vid-3", "ai-vid-4", "ai-vid-5", "ai-vid-6", "ai-vid-7", "ai-vid-8"];

    if (data.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column:1/-1;">Asset Not Found</p>`;
        return;
    }

    data.forEach((p, index) => {
        const card = document.createElement("article");
        card.className = "card";
        const loadingStr = index < 4 ? "eager" : "lazy";
        card.innerHTML = `
            <div class="ev-video-bg ${aiClasses[index % 8]}"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" loading="${loadingStr}" width="400" height="300">
            <h3 style="position:relative;z-index:2;">${p.name}</h3>
            <p style="color:var(--text-dim);position:relative;z-index:2;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;
        fragment.appendChild(card);
    });
    grid.innerHTML = "";
    grid.appendChild(fragment);
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase().trim();
    const filtered = VAULT_DATA.products.filter(p => p.name.toLowerCase().includes(q));
    renderProducts(filtered);
}

function renderFAQ() {
    const faqGrid = document.getElementById("faq-grid");
    if (!faqGrid) return;
    faqGrid.innerHTML = VAULT_DATA.faq.map((item, i) => `
        <article class="card">
            <h3 style="color:var(--primary);">Q. ${item.q}</h3>
            <p style="color:var(--text-dim);">${item.a}</p>
        </article>`).join('');
}

function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function selectPayment(method, element) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    element.classList.add("active");
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Verification Required.");
    const body = `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
    closeModal();
}

function init() {
    if (localStorage.getItem("theme") === "light") document.body.classList.add("light-mode");
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    
    const linksBox = document.getElementById("social-links");
    VAULT_DATA.menu.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.style = "padding:18px 25px; display:block; color:var(--text-main); font-weight:700;";
        a.innerText = item.label.toUpperCase();
        a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
        linksBox.appendChild(a);
    });

    renderProducts(VAULT_DATA.products);
    renderFAQ();
    typeWriter(VAULT_DATA.content.heroTitle, 0);
}

window.addEventListener('DOMContentLoaded', init);
