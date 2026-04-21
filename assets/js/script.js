/**
 * @file        script.js
 * @description Master-Optimized Core for Elite Vault v8.2.9
 *              Search Feedback & Instant Sync
 * @author      Frans Marcellino
 * @status      W3C Compliant & PageSpeed Optimized (Universal Excellence Edition)
 */

"use strict";

/* ══════════════════════════════════════
   1. VAULT DATA — Single Source of Truth
   ══════════════════════════════════════ */
const VAULT_DATA = {
  owner: {
    firstName: "FRANS",
    lastName:  "MARCELLINO",
    email:     "fransmarselinosroyer@gmail.com",
  },
  content: {
    heroTitle: "Architecting Digital Sovereignty.",
    footer:    "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
  },
  products: [
    { name: "Titan Core",   price: "$1,290", desc: "Enterprise SaaS Framework.",   img: "assets/img/titan-core.webp",    imgW: 640, imgH: 480 },
    { name: "Quantum UI",   price: "$750",   desc: "Kinetic React Components.",     img: "assets/img/quantum-ui.webp",    imgW: 640, imgH: 480 },
    { name: "SecureAuth X", price: "$490",   desc: "Zero-Knowledge Auth Suite.",    img: "assets/img/secure-auth-x.webp", imgW: 640, imgH: 480 },
    { name: "Nebula AI",    price: "$2,999", desc: "Neural Integration Engine.",    img: "assets/img/nebula-ai.webp",     imgW: 640, imgH: 480 },
    { name: "Apex CMS",     price: "$1,800", desc: "Headless Content Engine.",      img: "assets/img/apex-cms.webp",      imgW: 640, imgH: 480 },
    { name: "Zenith ERP",   price: "$4,500", desc: "Global Logistics Logic.",       img: "assets/img/zenith-erp.webp",    imgW: 640, imgH: 480 },
    { name: "Vortex DB",    price: "$980",   desc: "Real-time Vector Database.",    img: "assets/img/vortex-db.webp",     imgW: 640, imgH: 480 },
    { name: "Cipher Mesh",  price: "$1,100", desc: "P2P Encryption Layer.",         img: "assets/img/cipher-mesh.webp",   imgW: 640, imgH: 480 },
  ],
  menu: [
    { label: "Home",  id: "home"   },
    { label: "Vault", id: "market" },
    { label: "About", id: "about"  },
    { label: "FAQ",   id: "faq"    },
  ],
  faq: [
    {
      q: "How is the code architecture and performance verified?",
      a: "Our technical integrity is paramount. This website has passed rigorous W3C Validation (HTML5 & CSS3) and is optimized for maximum Google PageSpeed scores.",
    },
    {
      q: "What components are included in the acquisition package?",
      a: "Upon a successful transaction, you will receive a structured .ZIP Digital Archive containing: Optimized Core Source Code (HTML5, CSS3, JS), Operational Documentation (README) for implementation, and an Official License Certificate.",
    },
    {
      q: "What are the legal restrictions of this license?",
      a: "This license is exclusive for personal use or client projects. RESELLING, redistributing, or broadcasting this asset as a standalone product on any marketplace is STRICTLY PROHIBITED.",
    },
    {
      q: "How secure is my financial data during the transaction?",
      a: "All payments are managed by Trusted Digital Marketplaces via global security infrastructure (SSL/TLS). We do not store or have access to your sensitive banking data.",
    },
    {
      q: "Why is the initial procedure conducted via Email?",
      a: "We implement Email-Inquiry protocols to guarantee client privacy and prevent data exposure on public forms. This ensures a secure, private, and personal assistance path.",
    },
    {
      q: "How can I contact technical support or the operator?",
      a: "We are committed to professional support. For specific asset inquiries or technical assistance, contact our operator directly at: <a href='mailto:fransmarselinosroyer@gmail.com' style='color:var(--primary); font-weight:bold; text-decoration:underline;'>fransmarselinosroyer@gmail.com</a>.",
    },
  ],
};

/* STATE */
let curN = "";
let curP = "";
let selectedGateway = "PayPal";

/* MODAL */
function openModal(n, p) {
  curN = n;
  curP = p;

  const modal       = document.getElementById("modal");
  const targetName  = document.getElementById("target-name");
  const targetPrice = document.getElementById("target-price");

  if (!modal || !targetName || !targetPrice) return;

  targetName.textContent  = n.toUpperCase();
  targetPrice.textContent = p;
  modal.style.display     = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

/* ══════════════════════════════════════
   ✅ UPDATED CONFIRM FUNCTION (ONLY CHANGE)
   ══════════════════════════════════════ */
function confirmInquiry() {
  const modal = document.getElementById("modal");
  const clientNameInput = document.getElementById("client-name");

  if (!modal || !clientNameInput) return;

  const clientName = clientNameInput.value.trim();

  // Remove previous message
  const existing = modal.querySelector('[data-demo-msg="true"]');
  if (existing) existing.remove();

  const container = clientNameInput.parentElement;

  const createMessage = (title, message, isError = false) => {
    const box = document.createElement("div");
    box.setAttribute("data-demo-msg", "true");

    box.style.cssText = `
      margin-top:12px;
      padding:14px 16px;
      border-radius:14px;
      border:1px solid ${isError ? "rgba(255,100,100,0.2)" : "rgba(255,215,0,0.2)"};
      background:${isError ? "rgba(255,100,100,0.05)" : "rgba(255,215,0,0.05)"};
      font-size:0.85rem;
      line-height:1.5;
      opacity:0;
      transform:translateY(4px);
      transition:all 0.2s ease;
    `;

    box.innerHTML = `
      <div style="font-weight:700; margin-bottom:4px; color:${isError ? "#ff6b6b" : "var(--primary)"};">
        ${title}
      </div>
      <div style="color:var(--text-dim);">
        ${message}
      </div>
    `;

    container.appendChild(box);

    requestAnimationFrame(() => {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    });
  };

  // STEP 1 — VALIDATION
  if (!clientName) {
    createMessage(
      "Please enter your name to continue.",
      "This field is required to proceed with the demo checkout.",
      true
    );
    clientNameInput.focus();
    return;
  }

  // STEP 2 — DEMO CHECKOUT
  createMessage(
    "Secure Checkout",
    "This is a demo environment. Payment integration is required for live transactions.",
    false
  );
}
