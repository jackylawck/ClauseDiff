const CACHE_NAME = 'clausediff-v1';
const ASSETS = [
    './',
    './index.html'
];

// 安裝 Service Worker 並快取必要資源
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// 清理舊版本的快取 (當版本號由 v1 改成 v2 時會自動觸發)
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

// 攔截請求：優先讀取本機快取，無快取才連網
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
