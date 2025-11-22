const CACHE_NAME = 'aurora-optimizer-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/vite.svg',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/constants.tsx',
  '/services/geminiService.ts',
  '/components/ActionCard.tsx',
  '/components/ActionPage.tsx',
  '/components/Cleaner.tsx',
  '/components/Dashboard.tsx',
  '/components/Diagnostics.tsx',
  '/components/Memory.tsx',
  '/components/PageHeader.tsx',
  '/components/Recovery.tsx',
  '/components/ReportModal.tsx',
  '/components/Security.tsx',
  '/components/Sidebar.tsx',
  '/components/SystemCleaner.tsx',
  '/components/Updates.tsx',
  '/components/Privacy.tsx',
  '/components/OSInstaller.tsx',
  '/components/WindowsOptimizer.tsx',
  '/components/StartupManager.tsx',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});