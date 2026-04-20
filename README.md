# Elite Vault v8.2.9 — Digital Architect Portfolio

A personal portfolio and digital asset catalog website for Frans Marcellino. This project showcases a product repository, technical architecture information, and an FAQ section. Built with pure HTML, CSS, and vanilla JavaScript — no external frameworks required.

---

## 🧩 Core Features

Based strictly on the available code, this project includes:

- **Home Page** — Hero section with a typewriter text effect and navigation buttons to the Market page.
- **Market / Repository Page** — Displays a grid of 8 digital assets, each with a name, price, short description, and image.
- **Product Search** — Real-time filtering of products by name or description (debounced at 250ms).
- **About Page** — Four informational cards covering "Zero-Error Technical Integrity," "AI Cinematic Artistry," "Sovereign Architecture," and "Empirical Performance."
- **FAQ Page** — Displays 6 predefined questions and answers hardcoded in the JavaScript data object.
- **Product Detail Modal** — Clicking "Acquire License" opens a popup displaying the selected product's name and price.
- **Email Inquiry Form** — Inside the modal, users can input their name, select a preferred payment method (PayPal, Bank Transfer, Crypto), and trigger their default email client with a pre-filled inquiry message.
- **Dark / Light Mode Toggle** — Theme switcher located in the navigation bar. Preference is saved to `localStorage`.
- **Custom Cursor** — A gold circular cursor (visible on desktop only).
- **Dropdown Navigation Menu** — Accessible via the "kebab" (three-dot) button. Contains links to Home, Vault, About, and FAQ.
- **Animated Card Hover Effects** — Product cards feature animated gradient backgrounds (pulse, streaming lines, rotating conic gradients) on hover.

---

## 📁 Folder Structure

Analisis Kode Menyeluruh untuk Pembuatan README
Terima kasih telah mengirimkan tangkapan layar dari GitHub repository dan README.md Anda. Saya melihat beberapa hal penting yang perlu diselaraskan dan diperbaiki:

📋 Observasi dari Screenshot
1. GitHub Repository
Item	Status	Catatan
Repository Name	Elite_Vault_V8.2.9	✅ Bagus
Branch	main	✅ Standar
Folder Structure	assets/css/, assets/img/, assets/js/	✅ Sudah sesuai
Username	fransmacrellino	⚠️ Ada typo? "macrellino" vs "Marcellino"
2. README.md di GitHub
Item	Status	Catatan
Bahasa	Campur (Inggris + Indonesia)	⚠️ Paragraf terakhir masih bahasa Indonesia
Typo	"Keyboard" button	⚠️ Seharusnya "Kebab" button
Pemotongan Teks	Terpotong di bagian akhir	⚠️ Tidak selesai dirender
🔧 Saran Perbaikan README.md (Final Version)
Berikut adalah README.md lengkap dalam Bahasa Inggris profesional yang sudah saya perbaiki dari typo, pemotongan, dan campuran bahasa. Siap langsung di-copy ke GitHub.

markdown
# Elite Vault v8.2.9 — Digital Architect Portfolio

A personal portfolio and digital asset catalog website for Frans Marcellino. This project showcases a product repository, technical architecture information, and an FAQ section. Built with pure HTML, CSS, and vanilla JavaScript — no external frameworks required.

---

## 🧩 Core Features

Based strictly on the available code, this project includes:

- **Home Page** — Hero section with a typewriter text effect and navigation buttons to the Market page.
- **Market / Repository Page** — Displays a grid of 8 digital assets, each with a name, price, short description, and image.
- **Product Search** — Real-time filtering of products by name or description (debounced at 250ms).
- **About Page** — Four informational cards covering "Zero-Error Technical Integrity," "AI Cinematic Artistry," "Sovereign Architecture," and "Empirical Performance."
- **FAQ Page** — Displays 6 predefined questions and answers hardcoded in the JavaScript data object.
- **Product Detail Modal** — Clicking "Acquire License" opens a popup displaying the selected product's name and price.
- **Email Inquiry Form** — Inside the modal, users can input their name, select a preferred payment method (PayPal, Bank Transfer, Crypto), and trigger their default email client with a pre-filled inquiry message.
- **Dark / Light Mode Toggle** — Theme switcher located in the navigation bar. Preference is saved to `localStorage`.
- **Custom Cursor** — A gold circular cursor (visible on desktop only).
- **Dropdown Navigation Menu** — Accessible via the "kebab" (three-dot) button. Contains links to Home, Vault, About, and FAQ.
- **Animated Card Hover Effects** — Product cards feature animated gradient backgrounds (pulse, streaming lines, rotating conic gradients) on hover.

---

## 📁 Folder Structure
Elite_Vault_V8.2.9/
├── index.html # Main HTML file (contains structure, inline styles, and fallback functions)
├── assets/
│ ├── css/
│ │ └── style.css # Primary external stylesheet
│ ├── js/
│ │ └── script.js # Core JavaScript logic
│ └── img/
│ ├── Titan Core.webp
│ ├── Quantum UI.webp
│ ├── SecureAuth X.webp
│ ├── Nebula AI.webp
│ ├── Apex CMS.webp
│ ├── Zenith ERP.webp
│ ├── Vortex DB.webp
│ └── Cipher Mesh.webp # 8 product image files (must be present)

text

### Key File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main entry point. Contains HTML structure, a portion of inline CSS, and fallback functions (`toggleTheme`, `closeModal`, `confirmInquiry`). |
| `assets/css/style.css` | Primary external stylesheet. Defines all theme variables, layouts, animations, and component styles (cards, modal, navigation). |
| `assets/js/script.js` | Primary external JavaScript file. Stores the product dataset, FAQ content, menu configuration, rendering logic, search functionality, page navigation, typewriter effect, and email integration. |

---

## 🔧 Installation

### Required Tools

No dependencies. Only a modern web browser is required.

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A text editor (if you wish to modify the code)

### Installation Steps

1. **Clone or download** this repository to your local machine.
2. Ensure the folder structure matches the layout shown above.
3. No package manager commands (`npm install`, etc.) are needed — this is a static website.

---

## 🚀 How to Run the Project

1. Navigate to the project folder.
2. Locate the `index.html` file.
3. **Double-click** the file, or **right-click → Open with → Your preferred browser**.
4. The website will load and function immediately.

> **Note**: A local server is not required. All operations are client-side and static.

---

## 📘 Usage Guide

### User Flow

1. **Home Page**  
   - View the typewriter animation displaying: *"Architecting Digital Sovereignty."*  
   - Click **VIEW REPOSITORY** to browse the product catalog.  
   - Click **CONTACT OPERATOR** to send a direct email to the site owner.

2. **Vault / Repository Page**  
   - Browse the grid of 8 digital assets.  
   - Use the search bar (`Filter Assets...`) to filter products by name or description.  
   - Click the **Acquire License** button on any product card.

3. **Inquiry Modal**  
   - A popup appears showing the selected product name and price.  
   - Enter your name in the input field (required).  
   - Select a payment method (PayPal, Transfer, Crypto) by clicking the corresponding card.  
   - Click the **INQUIRE NOW** button → Your default email application will open with a pre-filled subject line and body.

4. **Navigate to Other Pages**  
   - Click the **three-dot icon (⋮)** in the top-right corner to open the dropdown menu.  
   - Select **About** to view technical vision statements.  
   - Select **FAQ** to view frequently asked questions.

5. **Switch Theme**  
   - Click the **LIGHT MODE / DARK MODE** button in the navigation bar. Your preference will be saved for future visits.

### Real-World Usage Example

- **Finding the "Nebula AI" product**:  
  Type `nebula` into the search bar → The grid will update to display only the "Nebula AI" product.

- **Inquiring about "Titan Core"**:  
  Click **Acquire License** on the "Titan Core" card → Enter your name → Select a payment method → Click **INQUIRE NOW** → Your email client opens with the recipient set to `fransmarselinosroyer@gmail.com` and the body containing your inquiry details.

---

## ⚙️ Configuration

### Environment Variables

No `.env` file or environment variable usage was found in the codebase.

### Hardcoded Data Configuration

All product, FAQ, and owner data is stored in the **`VAULT_DATA`** object located in `script.js`. To modify site content:

- **Edit `VAULT_DATA.products`** to change product names, prices, descriptions, or image paths.
- **Edit `VAULT_DATA.faq`** to update the questions and answers displayed on the FAQ page.
- **Edit `VAULT_DATA.owner`** to change the displayed name and the target email address for inquiries.

---

## 🌐 API Endpoints

**Not found in the code.**  
This project is a purely static frontend application. There are no `fetch` calls, `XMLHttpRequest` instances, or backend integrations.

---

## 📝 Important Notes & Limitations

1. **Product Images**  
   - The code references 8 specific image files located in the `assets/img/` folder (e.g., `Titan Core.webp`).  
   - If these image files are missing, the browser will display a broken image icon.

2. **Payment Methods**  
   - This is a **simulation only**. No actual payment gateway integration exists.  
   - The actual transaction process is intended to be handled manually via email correspondence.

3. **Custom Cursor**  
   - The custom cursor is automatically disabled on mobile devices (screen width ≤ 768px) via a CSS `@media` query.

4. **Fallback Functions**  
   - The `index.html` file contains inline fallback functions for `toggleTheme`, `closeModal`, and `confirmInquiry`.  
   - Under normal operation, the primary logic in `script.js` takes precedence.

5. **W3C Validation Badges**  
   - Validation logo links are present in the footer, but their `href` attributes are set to `"#"` and do not link to official validation results.

6. **External Dependencies**  
   - Only Google Fonts (`Plus Jakarta Sans` and `Playfair Display`) are loaded externally. No third-party JavaScript libraries are used.

7. **Theme Persistence**  
   - Theme preference is stored in `localStorage` under the key `"theme"`. Stored values are either `"light"` or `"dark"`.

---

## 📄 License

This project is licensed under the **MIT License** with additional terms for digital asset redistribution.

© 2026 Frans Marcellino. All Rights Reserved.
📌 Catatan Tambahan untuk GitHub
Username Typo: Jika fransmacrellino adalah typo, Anda bisa mengubahnya di Settings → Account → Change username (hati-hati, ini mempengaruhi semua link repository).

Versi di README: Saya lihat di screenshot GitHub tertulis v8.2.9, tapi di README masih v8.1.1. Saya sudah sinkronkan menjadi v8.2.9 di atas.

Commit Message: Saat update README, gunakan commit message seperti:

text
docs: update README with full English version and fix typos
Apakah Anda ingin saya lanjutkan dengan Opsi 1 (Documentation.html) atau Opsi 2 (Item Description untuk ThemeForest) seperti yang ditawarkan sebelumnya?

# Elite Vault v8.1.1 — Digital Architect Portfolio

A personal portfolio and digital asset catalog website for Frans Marcellino. This project showcases a product repository, technical architecture information, and an FAQ section. Built with pure HTML, CSS, and vanilla JavaScript — no external frameworks required.

---

## 🧩 Core Features

Based strictly on the available code, this project includes:

- **Home Page** — Hero section with a typewriter text effect and navigation buttons to the Market page.
- **Market / Repository Page** — Displays a grid of 8 digital assets, each with a name, price, short description, and image.
- **Product Search** — Real-time filtering of products by name or description (debounced at 250ms).
- **About Page** — Four informational cards covering "Zero-Error Technical Integrity," "AI Cinematic Artistry," "Sovereign Architecture," and "Empirical Performance."
- **FAQ Page** — Displays 6 predefined questions and answers hardcoded in the JavaScript data object.
- **Product Detail Modal** — Clicking "Acquire License" opens a popup displaying the selected product's name and price.
- **Email Inquiry Form** — Inside the modal, users can input their name, select a preferred payment method (PayPal, Bank Transfer, Crypto), and trigger their default email client with a pre-filled inquiry message.
- **Dark / Light Mode Toggle** — Theme switcher located in the navigation bar. Preference is saved to `localStorage`.
- **Custom Cursor** — A gold circular cursor (visible on desktop only).
- **Dropdown Navigation Menu** — Accessible via the "kebab" (three-dot) button. Contains links to Home, Vault, About, and FAQ.
- **Animated Card Hover Effects** — Product cards feature animated gradient backgrounds (pulse, streaming lines, rotating conic gradients) on hover.

---

## 📁 Folder Structure


Analisis Kode Menyeluruh untuk Pembuatan README
Sekarang saya akan menganalisis seluruh kode yang telah diberikan (HTML, CSS, dan JavaScript) dan membuat README.md berdasarkan hanya apa yang ada di dalam kode tersebut.

README.md
markdown
# Elite Vault v8.1.1 — Digital Architect Portfolio

Deskripsi singkat: Website portofolio pribadi dan katalog aset digital untuk Frans Marcellino. Proyek ini menampilkan halaman produk, informasi tentang arsitektur teknis, dan FAQ. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework eksternal.

---

## 🧩 Fitur Utama

Berdasarkan kode yang tersedia, proyek ini memiliki fitur:

- **Halaman Home** — Menampilkan judul hero dengan efek ketik (typewriter) dan tombol navigasi ke halaman Market.
- **Halaman Market / Repository** — Menampilkan grid produk (8 aset) dengan nama, harga, deskripsi singkat, dan gambar.
- **Pencarian Produk** — Filter produk berdasarkan nama atau deskripsi (real-time dengan debounce 250ms).
- **Halaman About** — Menampilkan 4 kartu informasi tentang "Technical Integrity", "AI Cinematic Artistry", "Sovereign Architecture", dan "Empirical Performance".
- **Halaman FAQ** — Menampilkan 6 pertanyaan dan jawaban yang telah ditentukan di dalam kode.
- **Modal Detail Produk** — Saat tombol "Acquire License" diklik, muncul popup berisi nama dan harga produk.
- **Form Inquiry via Email** — Di dalam modal, pengguna dapat mengisi nama, memilih metode pembayaran (PayPal, Transfer, Crypto), lalu membuka aplikasi email dengan data inquiry.
- **Dark / Light Mode** — Tema dapat diganti melalui tombol di navigasi, dan preferensi disimpan di `localStorage`.
- **Custom Cursor** — Kursor kustom berbentuk lingkaran emas (hanya tampil di desktop).
- **Dropdown Menu Navigasi** — Menu navigasi (Home, Vault, About, FAQ) dapat diakses melalui tombol "kebab" (tiga titik).
- **Efek Visual Hover Card** — Kartu produk memiliki animasi latar belakang (gradien, garis bergerak, grid) saat di-hover.

---

## 📁 Struktur Folder
proyek/
├── index.html # File HTML utama (berisi struktur dan inline style/script fallback)
├── assets/
│ ├── css/
│ │ └── style.css # Stylesheet eksternal utama
│ ├── js/
│ │ └── script.js # Logika JavaScript utama
│ └── img/
│ ├── Titan Core.webp
│ ├── Quantum UI.webp
│ ├── SecureAuth X.webp
│ ├── Nebula AI.webp
│ ├── Apex CMS.webp
│ ├── Zenith ERP.webp
│ ├── Vortex DB.webp
│ └── Cipher Mesh.webp # 8 file gambar produk (wajib ada)

text

### Penjelasan File Penting

| File | Fungsi |
|------|--------|
| `index.html` | Halaman utama. Mengandung struktur HTML, style CSS internal (sebagian), dan beberapa fungsi fallback (`toggleTheme`, `closeModal`, `confirmInquiry`). |
| `assets/css/style.css` | File CSS eksternal utama. Mendefinisikan semua variabel tema, layout, animasi, dan style komponen (card, modal, navigasi). |
| `assets/js/script.js` | File JavaScript eksternal utama. Menyimpan data produk, FAQ, menu, logika render, pencarian, navigasi halaman, typewriter, dan integrasi email. |

---

## 🔧 Cara Instalasi

### Tools yang Dibutuhkan

Tidak ada dependensi khusus. Hanya butuh:

- Browser web modern (Chrome, Firefox, Edge, Safari)
- Text editor (jika ingin mengedit kode)

### Langkah Instalasi

1. **Clone atau download** repositori ini ke komputer lokal.
2. Pastikan struktur folder sesuai dengan yang tercantum di atas.
3. Tidak perlu menjalankan `npm install` atau sejenisnya karena tidak ada package manager.

---

## 🚀 Cara Menjalankan Project

1. Buka folder proyek.
2. Cari file `index.html`.
3. **Klik dua kali** file tersebut, atau **klik kanan → Open with → Browser pilihan Anda**.
4. Website akan langsung terbuka dan berfungsi penuh.

> **Catatan**: Tidak diperlukan server lokal. Semua berjalan secara statis.

---

## 📘 Cara Penggunaan

### Alur Pengguna

1. **Halaman Home**  
   - Melihat animasi teks ketik: *"Architecting Digital Sovereignty."*  
   - Klik **VIEW REPOSITORY** untuk masuk ke halaman katalog produk.  
   - Klik **CONTACT OPERATOR** untuk mengirim email langsung ke pemilik.

2. **Halaman Vault / Repository**  
   - Lihat daftar 8 aset digital.  
   - Gunakan kotak pencarian (`Filter Assets...`) untuk menyaring produk berdasarkan nama atau deskripsi.  
   - Klik tombol **Acquire License** pada kartu produk yang diinginkan.

3. **Modal Inquiry**  
   - Muncul popup berisi nama dan harga produk.  
   - Isi nama Anda pada kolom input (wajib).  
   - Pilih metode pembayaran (PayPal, Transfer, Crypto) dengan mengklik kartu metode.  
   - Klik tombol **INQUIRE NOW** → membuka aplikasi email default dengan subjek dan body yang sudah terisi otomatis.

4. **Navigasi Halaman Lain**  
   - Klik ikon **tiga titik (⋮)** di pojok kanan atas untuk membuka menu.  
   - Pilih **About** untuk membaca informasi visi teknis.  
   - Pilih **FAQ** untuk membaca pertanyaan umum.

5. **Ganti Tema**  
   - Klik tombol **LIGHT MODE / DARK MODE** di navigasi. Preferensi akan disimpan.

### Contoh Penggunaan Nyata

- **Mencari produk "Nebula AI"**:  
  Ketik `nebula` di kotak pencarian → grid hanya menampilkan produk "Nebula AI".

- **Melakukan inquiry untuk "Titan Core"**:  
  Klik **Acquire License** pada kartu "Titan Core" → isi nama → pilih metode → klik **INQUIRE NOW** → email terbuka dengan penerima `fransmarselinosroyer@gmail.com` dan body berisi data inquiry.

---

## ⚙️ Konfigurasi

### Environment Variables

Tidak ditemukan file `.env` atau penggunaan environment variables di dalam kode.

### Konfigurasi Data (Hardcoded)

Semua data produk, FAQ, dan informasi pemilik disimpan di dalam **`VAULT_DATA`** pada file `script.js`. Untuk mengubah konten:

- **Edit `VAULT_DATA.products`** untuk mengganti nama, harga, deskripsi, atau path gambar produk.
- **Edit `VAULT_DATA.faq`** untuk mengubah pertanyaan dan jawaban FAQ.
- **Edit `VAULT_DATA.owner`** untuk mengganti nama dan email tujuan inquiry.

---

## 🌐 API Endpoint

**Tidak ditemukan di kode.**  
Proyek ini murni frontend statis. Tidak ada panggilan `fetch`, `XMLHttpRequest`, atau integrasi backend.

---

## 📝 Catatan Penting / Limitasi

1. **Gambar Produk**  
   - Kode merujuk ke 8 file gambar di folder `assets/img/` dengan nama spesifik (contoh: `Titan Core.webp`).  
   - Jika file gambar tidak ada, browser akan menampilkan ikon *broken image*.

2. **Metode Pembayaran**  
   - Hanya simulasi pemilihan metode. Tidak ada integrasi gateway pembayaran nyata.  
   - Proses transaksi sebenarnya dilakukan manual melalui email.

3. **Custom Cursor**  
   - Kursor kustom dinonaktifkan di perangkat mobile (lebar layar ≤ 768px) melalui CSS `@media`.

4. **Fallback Function**  
   - File `index.html` mengandung fungsi `toggleTheme`, `closeModal`, dan `confirmInquiry` sebagai fallback.  
   - Fungsi utama yang dijalankan tetap berasal dari `script.js` (kecuali jika script eksternal gagal dimuat).

5. **W3C Validation Badge**  
   - Terdapat tautan ke logo validasi W3C di footer, namun tautan (`href="#"`) tidak mengarah ke halaman validasi resmi.

6. **Dependensi Eksternal**  
   - Hanya Google Fonts (`Plus Jakarta Sans` dan `Playfair Display`). Tidak ada library JavaScript eksternal.

7. **Mode Light/Dark**  
   - Preferensi tema disimpan di `localStorage` dengan key `"theme"`. Nilai yang disimpan: `"light"` atau `"dark"`.
Jangan memakai bahasa indonesia, tetapi memakai bahasa inggris yang profesional dan mudah dimengerti klien internasional
I will now analyze all the provided code (HTML, CSS, and JavaScript) and create a README.md based only on what exists in the code, written in professional English for an international audience.

README.md
markdown
# Elite Vault v8.1.1 — Digital Architect Portfolio

A personal portfolio and digital asset catalog website for Frans Marcellino. This project showcases a product repository, technical architecture information, and an FAQ section. Built with pure HTML, CSS, and vanilla JavaScript — no external frameworks required.

---

## 🧩 Core Features

Based strictly on the available code, this project includes:

- **Home Page** — Hero section with a typewriter text effect and navigation buttons to the Market page.
- **Market / Repository Page** — Displays a grid of 8 digital assets, each with a name, price, short description, and image.
- **Product Search** — Real-time filtering of products by name or description (debounced at 250ms).
- **About Page** — Four informational cards covering "Zero-Error Technical Integrity," "AI Cinematic Artistry," "Sovereign Architecture," and "Empirical Performance."
- **FAQ Page** — Displays 6 predefined questions and answers hardcoded in the JavaScript data object.
- **Product Detail Modal** — Clicking "Acquire License" opens a popup displaying the selected product's name and price.
- **Email Inquiry Form** — Inside the modal, users can input their name, select a preferred payment method (PayPal, Bank Transfer, Crypto), and trigger their default email client with a pre-filled inquiry message.
- **Dark / Light Mode Toggle** — Theme switcher located in the navigation bar. Preference is saved to `localStorage`.
- **Custom Cursor** — A gold circular cursor (visible on desktop only).
- **Dropdown Navigation Menu** — Accessible via the "kebab" (three-dot) button. Contains links to Home, Vault, About, and FAQ.
- **Animated Card Hover Effects** — Product cards feature animated gradient backgrounds (pulse, streaming lines, rotating conic gradients) on hover.

---

## 📁 Folder Structure
project-root/
├── index.html # Main HTML file (contains structure, inline styles, and fallback functions)
├── assets/
│ ├── css/
│ │ └── style.css # Primary external stylesheet
│ ├── js/
│ │ └── script.js # Core JavaScript logic
│ └── img/
│ ├── Titan Core.webp
│ ├── Quantum UI.webp
│ ├── SecureAuth X.webp
│ ├── Nebula AI.webp
│ ├── Apex CMS.webp
│ ├── Zenith ERP.webp
│ ├── Vortex DB.webp
│ └── Cipher Mesh.webp # 8 product image files (must be present)


### Key File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main entry point. Contains HTML structure, a portion of inline CSS, and fallback functions (`toggleTheme`, `closeModal`, `confirmInquiry`). |
| `assets/css/style.css` | Primary external stylesheet. Defines all theme variables, layouts, animations, and component styles (cards, modal, navigation). |
| `assets/js/script.js` | Primary external JavaScript file. Stores the product dataset, FAQ content, menu configuration, rendering logic, search functionality, page navigation, typewriter effect, and email integration. |

---

## 🔧 Installation

### Required Tools

No dependencies. Only a modern web browser is required.

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A text editor (if you wish to modify the code)

### Installation Steps

1. **Clone or download** this repository to your local machine.
2. Ensure the folder structure matches the layout shown above.
3. No package manager commands (`npm install`, etc.) are needed — this is a static website.

---

## 🚀 How to Run the Project

1. Navigate to the project folder.
2. Locate the `index.html` file.
3. **Double-click** the file, or **right-click → Open with → Your preferred browser**.
4. The website will load and function immediately.

> **Note**: A local server is not required. All operations are client-side and static.

---

## 📘 Usage Guide

### User Flow

1. **Home Page**  
   - View the typewriter animation displaying: *"Architecting Digital Sovereignty."*  
   - Click **VIEW REPOSITORY** to browse the product catalog.  
   - Click **CONTACT OPERATOR** to send a direct email to the site owner.

2. **Vault / Repository Page**  
   - Browse the grid of 8 digital assets.  
   - Use the search bar (`Filter Assets...`) to filter products by name or description.  
   - Click the **Acquire License** button on any product card.

3. **Inquiry Modal**  
   - A popup appears showing the selected product name and price.  
   - Enter your name in the input field (required).  
   - Select a payment method (PayPal, Transfer, Crypto) by clicking the corresponding card.  
   - Click the **INQUIRE NOW** button → Your default email application will open with a pre-filled subject line and body.

4. **Navigate to Other Pages**  
   - Click the **three-dot icon (⋮)** in the top-right corner to open the dropdown menu.  
   - Select **About** to view technical vision statements.  
   - Select **FAQ** to view frequently asked questions.

5. **Switch Theme**  
   - Click the **LIGHT MODE / DARK MODE** button in the navigation bar. Your preference will be saved for future visits.

### Real-World Usage Example

- **Finding the "Nebula AI" product**:  
  Type `nebula` into the search bar → The grid will update to display only the "Nebula AI" product.

- **Inquiring about "Titan Core"**:  
  Click **Acquire License** on the "Titan Core" card → Enter your name → Select a payment method → Click **INQUIRE NOW** → Your email client opens with the recipient set to `fransmarselinosroyer@gmail.com` and the body containing your inquiry details.

---

## ⚙️ Configuration

### Environment Variables

No `.env` file or environment variable usage was found in the codebase.

### Hardcoded Data Configuration

All product, FAQ, and owner data is stored in the **`VAULT_DATA`** object located in `script.js`. To modify site content:

- **Edit `VAULT_DATA.products`** to change product names, prices, descriptions, or image paths.
- **Edit `VAULT_DATA.faq`** to update the questions and answers displayed on the FAQ page.
- **Edit `VAULT_DATA.owner`** to change the displayed name and the target email address for inquiries.

---

## 🌐 API Endpoints

**Not found in the code.**  
This project is a purely static frontend application. There are no `fetch` calls, `XMLHttpRequest` instances, or backend integrations.

---

## 📝 Important Notes & Limitations

1. **Product Images**  
   - The code references 8 specific image files located in the `assets/img/` folder (e.g., `Titan Core.webp`).  
   - If these image files are missing, the browser will display a broken image icon.

2. **Payment Methods**  
   - This is a **simulation only**. No actual payment gateway integration exists.  
   - The actual transaction process is intended to be handled manually via email correspondence.

3. **Custom Cursor**  
   - The custom cursor is automatically disabled on mobile devices (screen width ≤ 768px) via a CSS `@media` query.

4. **Fallback Functions**  
   - The `index.html` file contains inline fallback functions for `toggleTheme`, `closeModal`, and `confirmInquiry`.  
   - Under normal operation, the primary logic in `script.js` takes precedence.

5. **W3C Validation Badges**  
   - Validation logo links are present in the footer, but their `href` attributes are set to `"#"` and do not link to official validation results.

6. **External Dependencies**  
   - Only Google Fonts (`Plus Jakarta Sans` and `Playfair Display`) are loaded externally. No third-party JavaScript libraries are used.

7. **Theme Persistence**  
   - Theme preference is stored in `localStorage` under the key `"theme"`. Stored values are either `"light"` or `"dark"`.
  
     ========================================================================================================================
Silahkan ganti bahasanya keseluruhan menjadi bahasa inggris
Berikut adalah README.md lengkap dalam Bahasa Inggris profesional tanpa campuran Bahasa Indonesia. Siap langsung di-copy ke repository GitHub Anda.

markdown
# Elite Vault v8.2.9 — Digital Architect Portfolio

A personal portfolio and digital asset catalog website for Frans Marcellino. This project showcases a product repository, technical architecture information, and an FAQ section. Built with pure HTML, CSS, and vanilla JavaScript — no external frameworks required.

---

## 🧩 Core Features

Based strictly on the available code, this project includes:

- **Home Page** — Hero section with a typewriter text effect and navigation buttons to the Market page.
- **Market / Repository Page** — Displays a grid of 8 digital assets, each with a name, price, short description, and image.
- **Product Search** — Real-time filtering of products by name or description (debounced at 250ms).
- **About Page** — Four informational cards covering "Zero-Error Technical Integrity," "AI Cinematic Artistry," "Sovereign Architecture," and "Empirical Performance."
- **FAQ Page** — Displays 6 predefined questions and answers hardcoded in the JavaScript data object.
- **Product Detail Modal** — Clicking "Acquire License" opens a popup displaying the selected product's name and price.
- **Email Inquiry Form** — Inside the modal, users can input their name, select a preferred payment method (PayPal, Bank Transfer, Crypto), and trigger their default email client with a pre-filled inquiry message.
- **Dark / Light Mode Toggle** — Theme switcher located in the navigation bar. Preference is saved to `localStorage`.
- **Custom Cursor** — A gold circular cursor (visible on desktop only).
- **Dropdown Navigation Menu** — Accessible via the "kebab" (three-dot) button. Contains links to Home, Vault, About, and FAQ.
- **Animated Card Hover Effects** — Product cards feature animated gradient backgrounds (pulse, streaming lines, rotating conic gradients) on hover.

---

## 📁 Folder Structure
Elite_Vault_V8.2.9/
├── index.html # Main HTML file (contains structure, inline styles, and fallback functions)
├── assets/
│ ├── css/
│ │ └── style.css # Primary external stylesheet
│ ├── js/
│ │ └── script.js # Core JavaScript logic
│ └── img/
│ ├── Titan Core.webp
│ ├── Quantum UI.webp
│ ├── SecureAuth X.webp
│ ├── Nebula AI.webp
│ ├── Apex CMS.webp
│ ├── Zenith ERP.webp
│ ├── Vortex DB.webp
│ └── Cipher Mesh.webp # 8 product image files (must be present)


### Key File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main entry point. Contains HTML structure, a portion of inline CSS, and fallback functions (`toggleTheme`, `closeModal`, `confirmInquiry`). |
| `assets/css/style.css` | Primary external stylesheet. Defines all theme variables, layouts, animations, and component styles (cards, modal, navigation). |
| `assets/js/script.js` | Primary external JavaScript file. Stores the product dataset, FAQ content, menu configuration, rendering logic, search functionality, page navigation, typewriter effect, and email integration. |

---

## 🔧 Installation

### Required Tools

No dependencies. Only a modern web browser is required.

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A text editor (if you wish to modify the code)

### Installation Steps

1. **Clone or download** this repository to your local machine.
2. Ensure the folder structure matches the layout shown above.
3. No package manager commands (`npm install`, etc.) are needed — this is a static website.

---

## 🚀 How to Run the Project

1. Navigate to the project folder.
2. Locate the `index.html` file.
3. **Double-click** the file, or **right-click → Open with → Your preferred browser**.
4. The website will load and function immediately.

> **Note**: A local server is not required. All operations are client-side and static.

---

## 📘 Usage Guide

### User Flow

1. **Home Page**  
   - View the typewriter animation displaying: *"Architecting Digital Sovereignty."*  
   - Click **VIEW REPOSITORY** to browse the product catalog.  
   - Click **CONTACT OPERATOR** to send a direct email to the site owner.

2. **Vault / Repository Page**  
   - Browse the grid of 8 digital assets.  
   - Use the search bar (`Filter Assets...`) to filter products by name or description.  
   - Click the **Acquire License** button on any product card.

3. **Inquiry Modal**  
   - A popup appears showing the selected product name and price.  
   - Enter your name in the input field (required).  
   - Select a payment method (PayPal, Transfer, Crypto) by clicking the corresponding card.  
   - Click the **INQUIRE NOW** button → Your default email application will open with a pre-filled subject line and body.

4. **Navigate to Other Pages**  
   - Click the **three-dot icon (⋮)** in the top-right corner to open the dropdown menu.  
   - Select **About** to view technical vision statements.  
   - Select **FAQ** to view frequently asked questions.

5. **Switch Theme**  
   - Click the **LIGHT MODE / DARK MODE** button in the navigation bar. Your preference will be saved for future visits.

### Real-World Usage Example

- **Finding the "Nebula AI" product**:  
  Type `nebula` into the search bar → The grid will update to display only the "Nebula AI" product.

- **Inquiring about "Titan Core"**:  
  Click **Acquire License** on the "Titan Core" card → Enter your name → Select a payment method → Click **INQUIRE NOW** → Your email client opens with the recipient set to `fransmarselinosroyer@gmail.com` and the body containing your inquiry details.

---

## ⚙️ Configuration

### Environment Variables

No `.env` file or environment variable usage was found in the codebase.

### Hardcoded Data Configuration

All product, FAQ, and owner data is stored in the **`VAULT_DATA`** object located in `script.js`. To modify site content:

- **Edit `VAULT_DATA.products`** to change product names, prices, descriptions, or image paths.
- **Edit `VAULT_DATA.faq`** to update the questions and answers displayed on the FAQ page.
- **Edit `VAULT_DATA.owner`** to change the displayed name and the target email address for inquiries.

---

## 🌐 API Endpoints

**Not found in the code.**  
This project is a purely static frontend application. There are no `fetch` calls, `XMLHttpRequest` instances, or backend integrations.

---

## 📝 Important Notes & Limitations

1. **Product Images**  
   - The code references 8 specific image files located in the `assets/img/` folder (e.g., `Titan Core.webp`).  
   - If these image files are missing, the browser will display a broken image icon.

2. **Payment Methods**  
   - This is a **simulation only**. No actual payment gateway integration exists.  
   - The actual transaction process is intended to be handled manually via email correspondence.

3. **Custom Cursor**  
   - The custom cursor is automatically disabled on mobile devices (screen width ≤ 768px) via a CSS `@media` query.

4. **Fallback Functions**  
   - The `index.html` file contains inline fallback functions for `toggleTheme`, `closeModal`, and `confirmInquiry`.  
   - Under normal operation, the primary logic in `script.js` takes precedence.

5. **W3C Validation Badges**  
   - Validation logo links are present in the footer, but their `href` attributes are set to `"#"` and do not link to official validation results.

6. **External Dependencies**  
   - Only Google Fonts (`Plus Jakarta Sans` and `Playfair Display`) are loaded externally. No third-party JavaScript libraries are used.

7. **Theme Persistence**  
   - Theme preference is stored in `localStorage` under the key `"theme"`. Stored values are either `"light"` or `"dark"`.

---

## 📄 License

This project is licensed under the **MIT License** with additional terms for digital asset redistribution.

© 2026 Frans Marcellino. All Rights Reserved.
