const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/assets/img/armenia.png',
  '/assets/dist/js/bootstrap.bundle.min.js',
  '/assets/dist/css/style.css',
  '/assets/dist/css/bootstrap.min.css',
];

self.addEventListener('install', (event) => {
 // console.log('👷', 'install', event);
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
 //console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // console.log('👷', 'fetch', event);
  event.respondWith(fetch(event.request));
});