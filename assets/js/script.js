/**
* @file script.js
* @description Final Master Sync - Elite Vault v8.1.3 (Tailwind Optimized)
* @author Frans Marcellino
*/

"use strict";

const VAULT_DATA = {
    owner: { firstName: "FRANS", lastName: "MARCELLINO", email: "fransmarselinosroyer@gmail.com" },
    content: { heroTitle: "Architecting Digital Sovereignty.", footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

let curN = "", curP = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

// --- UI ENGINE (Cursor & Navigation) ---
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => target.classList.add("active"), 100);
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

    if (forceClose || !dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden", "opacity-0", "-translate-y-2");
    } else {
        dropdown.classList.remove("hidden");
        setTimeout(() => dropdown.classList.remove("opacity-0", "-translate-y-2"), 10);
    }
}

// Click outside menu fix
document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebabBtn = document.getElementById("kebab-menu-btn");
    if (dropdown && !dropdown.classList.contains("hidden") && !dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
        toggleMenu(true);
    }
});

// --- PRODUCT RENDERER (Tailwind Grid Sync) ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20"><h3 class="text-text-dim uppercase tracking-widest text-sm font-bold">Asset Not Found</h3></div>`;
        return;
    }

    const aiClasses = ["ai-vid-1", "ai-vid-2", "ai-vid-3", "ai-vid-4", "ai-vid-5", "ai-vid-6", "ai-vid-7", "ai-vid-8"];

    grid.innerHTML = data.map((p, index) => {
        const vidClass = aiClasses[index % aiClasses.length];
        return `
            <article class="group relative bg-surface border border-white/5 p-8 rounded-[32px] overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-2 shadow-2xl">
                <div class="ev-video-bg absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${vidClass}"></div>
                
                <div class="absolute top-6 right-6 bg-gradient-to-r from-primary to-orange-500 text-black px-4 py-1.5 rounded-xl font-black text-[0.7rem] z-10 italic shadow-lg">
                    ${p.price}
                </div>

                <div class="relative z-1 overflow-hidden rounded-2xl mb-6 bg-bg aspect-video flex items-center justify-center border border-white/5">
                    <img src="${p.img}" class="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="${p.name}" loading="lazy">
                </div>

                <div class="relative z-10">
                    <h3 class="text-xl font-bold mb-2 tracking-tight">${p.name}</h3>
                    <p class="text-text-dim text-sm font-light mb-8 leading-relaxed">${p.desc}</p>
                    <button class="w-full py-4 bg-primary text-black rounded-xl font-black uppercase text-[0.7rem] tracking-[2px] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] active:scale-95 transition-all" onclick="openModal('${p.name}', '${p.price}')">
                        Acquire License
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

// --- MODAL & PAYMENT ---
function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() { 
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

function selectPayment(method, element) {
    document.querySelectorAll(".method-card").forEach(c => {
        c.classList.remove("border-primary", "bg-primary/5", "opacity-100");
        c.classList.add("opacity-50", "border-white/10");
    });
    element.classList.add("border-primary", "bg-primary/5", "opacity-100");
    element.classList.remove("opacity-50", "border-white/10");
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    const body = `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZATION ---
function init() {
    // Theme Restoration
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    // Footer Text
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = VAULT_DATA.content.footer;

    // Build Social/Menu Links in Dropdown
    const linksBox = document.getElementById("social-links");
    if (linksBox) {
        linksBox.innerHTML = VAULT_DATA.menu.map(item => `
            <a href="#${item.id}" class="py-4 px-6 text-[0.7rem] font-bold tracking-widest text-text-main border-b border-white/5 hover:bg-white/5 transition-colors block" onclick="event.preventDefault(); navigateTo('${item.id}')">
                ${item.label.toUpperCase()}
            </a>
        `).join("");
    }

    renderProducts(VAULT_DATA.products);
}

window.addEventListener('DOMContentLoaded', init);
