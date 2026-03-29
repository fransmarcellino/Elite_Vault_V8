/**
 * @file script.js
 * @description Core Logic for Elite Vault v8.0 - Engineering Digital Authority
 * @author Frans Marcellino
 * @version 8.0.6 (Integrated Search Error, W3C, & Contact Systems)
 */

"use strict";

const VAULT_DATA = {
    owner: {
        firstName: "FRANS",
        lastName: "MARCELLINO",
        fullName: "Frans Marcellino",
        email: "fransmarselinosroyer@gmail.com",
        badge: "[ Sovereign Repository v8.0 ]",
    },
    content: {
        heroTitle: "Architecting Digital Sovereignty.",
        heroDesc: "Industrial-grade software assets designed for absolute performance.",
        footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
    },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" },
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" },
    ],
    // Extension: Social Contact Data
    socials: [
        { label: "INSTAGRAM", icon: "fab fa-instagram", url: "https://instagram.com/frans_marcellino" },
        { label: "LINKEDIN", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/frans-marcellino" },
        { label: "EMAIL", icon: "fas fa-envelope", url: "mailto:fransmarselinosroyer@gmail.com" }
    ]
};

let curN = "", curP = "", selectedGateway = "PayPal"; 
const cursorEl = document.getElementById("cursor");

// --- UI ENGINE ---

document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.left = `${e.clientX}px`;
            cursorEl.style.top = `${e.clientY}px`;
        });
    }
});

function navigateTo(id) {
    document.querySelectorAll(".page").forEach((p) => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    const target = document.getElementById(id);
    if (target) {
        target.style.display = "block";
        setTimeout(() => { target.classList.add("active"); }, 10);
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
    const wrapper = document.querySelector(".menu-wrapper");
    if (!dropdown || !wrapper) return;

    const closeAction = () => {
        dropdown.classList.remove("active");
        setTimeout(() => {
            if (!dropdown.classList.contains("active")) {
                dropdown.style.display = "none";
                wrapper.style.zIndex = "10";
            }
        }, 300);
    };

    if (forceClose) { closeAction(); return; }

    if (!dropdown.classList.contains("active")) {
        wrapper.style.zIndex = "99999"; 
        dropdown.style.display = "block";
        void dropdown.offsetWidth;
        dropdown.classList.add("active");
    } else {
        closeAction();
    }
}

document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebabBtn = document.getElementById("kebab-menu-btn");
    if (dropdown && dropdown.classList.contains("active")) {
        if (!dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
            toggleMenu(true);
        }
    }
});

function typeWriter(text, i, cb) {
    const el = document.getElementById("hero-title");
    if (el) {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
            setTimeout(() => typeWriter(text, i + 1, cb), 60);
        } else if (cb) setTimeout(cb, 500);
    }
}

// --- DATA RENDERING + SEARCH ERROR ---

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px; border: 1px dashed var(--border); border-radius: 20px; background: rgba(255, 255, 255, 0.02);">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--primary); margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 1.1rem; letter-spacing: 2px; color: var(--text-main); margin-bottom: 10px;">PROTOCOL ERROR</h3>
                <p style="color: var(--text-dim); font-size: 0.75rem; font-weight: 300;">No assets match your search protocol. Verify query identifier.</p>
                <button onclick="document.getElementById('search-bar').value=''; renderProducts(VAULT_DATA.products);" 
                        style="margin-top: 20px; background: none; border: 1px solid var(--primary); color: var(--primary); padding: 8px 18px; border-radius: 30px; cursor: pointer; font-size: 0.65rem; font-weight: 800; letter-spacing: 1px;">
                    RESET REPOSITORY
                </button>
            </div>`;
        return;
    }

    data.forEach((p) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="" loading="lazy">
            <h3 style="font-size:1.8rem; letter-spacing:-1px; margin-bottom:10px;">${p.name}</h3>
            <p style="color:var(--text-dim); margin-bottom:25px; font-weight:300;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;
        grid.appendChild(card);
    });
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function selectPayment(method, element) {
    document.querySelectorAll('.method-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    const subject = encodeURIComponent(`Acquisition Inquiry: ${curN}`);
    const body = encodeURIComponent(`CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`);
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=${subject}&body=${body}`;
    closeModal();
}

function init() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    document.getElementById("nav-logo").innerHTML = `${VAULT_DATA.owner.firstName} <span>${VAULT_DATA.owner.lastName}</span>`;
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;

    const linksBox = document.getElementById("social-links");
    if (linksBox) {
        linksBox.innerHTML = "";
        
        // Render Navigasi Menu Utama
        VAULT_DATA.menu.forEach((item) => {
            linksBox.innerHTML += `<a href="javascript:void(0)" onclick="navigateTo('${item.id}')" style="padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); transition:0.3s; font-weight:700;">${item.label.toUpperCase()}</a>`;
        });

        // Render Kontak/Social Media Terintegrasi
        linksBox.innerHTML += `<div style="padding:12px 25px; font-size:0.6rem; color:var(--text-dim); letter-spacing:2px; font-weight:800; background:rgba(255,255,255,0.02)">CONTACT ACCESS</div>`;
        
        VAULT_DATA.socials.forEach((soc) => {
            linksBox.innerHTML += `
                <a href="${soc.url}" target="_blank" style="padding:15px 25px; display:flex; align-items:center; gap:12px; color:var(--primary); text-decoration:none; font-size:0.7rem; transition:0.3s; font-weight:600;">
                   <i class="${soc.icon}" style="width:15px"></i> ${soc.label}
                </a>`;
        });
    }

    setTimeout(() => {
        typeWriter(VAULT_DATA.content.heroTitle, 0, () => {
            renderProducts(VAULT_DATA.products);
        });
    }, 800);
}

window.onload = init;
