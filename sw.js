const CACHE_NAME = 'livsfaser-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './css/sections.css',
  './css/screens.css',
  './css/arc-nav.css',
  './js/app.js',
  './js/router.js',
  './js/arc-nav.js',
  './js/storage.js',
  './js/calculations.js',
  './js/data.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/images/9-cirkler.png',
  './assets/images/rosa-lotus.png',
  './assets/images/krydsfelt-final.png',
  './assets/images/relationer_blad_liberation_HQ.png',
  './assets/images/din-krop.jpg',
  './assets/images/min-rejse-ikigai.png',
  './assets/images/vinduer-tid-lilla.png',
  './assets/images/relationer-forside.png'
];

// Install — cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache first, then network, then cache screen files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache screen files and fonts dynamically
        if (response.ok && (
          event.request.url.includes('/screens/') ||
          event.request.url.includes('/fonts/')
        )) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
