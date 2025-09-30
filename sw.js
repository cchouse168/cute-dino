const CACHE = 'cute-dino-v1';
const ASSETS = [
  '/cute-dino/',
  '/cute-dino/index.html',
  '/cute-dino/manifest.webmanifest',
  '/cute-dino/icons/icon-192.png',
  '/cute-dino/icons/icon-512.png'
  // 如果你的遊戲有外部 JS / 圖片，照樣把 /cute-dino/ 路徑加進來
  // 例如：'/cute-dino/main.js', '/cute-dino/assets/dino.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
