/**
 * @file vault-config.js
 * @description Central Control Unit for Elite Vault v8
 */

const CONFIG = {
    owner: {
        firstName: "FRANS",
        lastName: "MARCELLINO",
        email: "fransmarselinosroyer@gmail.com"
    },
    colors: {
        primary: "#ffd700",
        bg: "#050505",
        surface: "#0f0f0f"
    },
    home: {
        badge: "ESTABLISHED 2026",
        heroTitle: "Architecting Digital Sovereignty.",
        description: "Industrial-grade software assets designed for absolute performance.",
        footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED"
    },
    sections: {
        repo: { title: "The Repository", subtitle: "Curated Assets by Frans Marcellino" },
        about: { title: "Sovereign Architecture" },
        faq: { title: "Knowledge Base", subtitle: "Acquisition Protocols & Intel" }
    },
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" },
        { label: "FAQ", id: "faq" }
    ],
    aboutCards: [
        { title: "Immutable", desc: "Pondasi kode abadi yang dirancang untuk performa tanpa batas waktu." },
        { title: "Elite Security", desc: "Keamanan tingkat industri dengan standar enkripsi tanpa kompromi." }
    ],
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "assets/img/Titan Core.webp" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "assets/img/Quantum UI.webp" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "assets/img/SecureAuth X.webp" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "assets/img/Nebula AI.webp" }
    ],
    faq: [
        { q: "How is the code verified?", a: "This website has passed W3C Validation and is optimized for PageSpeed." },
        { q: "What's in the package?", a: "A structured .ZIP Digital Archive with Source Code and License." }
    ],
    paymentMethods: ["PayPal", "Card", "Crypto"]
};
