self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './assets/css/style.css',
        './assets/images/logo128.png',
        './assets/images/map.jpg',
      ]);
    })
  );
  console.log('Install');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
