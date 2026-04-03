/* Elite Vault v8.3.0 - Service Worker Protocol */
const CACHE_NAME = 'ev-cache-v8.3.0';
const ASSETS = [
  './',
  './index.html',
  './assets/js/script.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;700;800&family=Playfair+Display:ital,wght@0,900;1,900&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
