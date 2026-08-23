const CACHE_NAME = 'clausediff-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest-zh.json',
    './manifest-en.json',
    './ClauseDifficon-192.png',
    './ClauseDifficon-512.png'
];

// 安裝 Service Worker 並快取本機純靜態資源 (零外部 CDN 依賴)
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// 清理舊版本快取 (自動清除 v1 舊快取)
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

// 攔截請求：優先讀取本機快取 (100% 離線 / Air-Gapped Ready)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
