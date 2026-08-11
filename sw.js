const CACHE_NAME = 'clausediff-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest-zh.json',
    './manifest-en.json',
    './ClauseDifficon-192.png',
    './ClauseDifficon-512.png',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/jsdiff/5.1.0/diff.min.js'
];

// 安裝 Service Worker 並快取所有必要資源 (包含 CDN 函式庫)
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// 清理舊版本快取
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 攔截請求：優先讀取本機快取，實現 100% 離線/斷網運算 (Air-Gapped Ready)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
