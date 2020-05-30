var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/simpletodo/',
        '/simpletodo/manifest.json',
        '/simpletodo/index.html',
        '/simpletodo/sw.js',
        '/simpletodo/css/index.css',
        '/simpletodo/js/index.js',
        '/simpletodo/js/addTask.js',
        '/simpletodo/js/clearAll.js',
        '/simpletodo/js/countPendentsTasks.js',
        '/simpletodo/js/loadTasks.js',
        '/simpletodo/js/renderTasks.js',
        '/simpletodo/js/setTime.js',
        '/simpletodo/js/removeTask.js',
        '/simpletodo/js/generateId.js',
        '/simpletodo/js/markAsDone.js',
        '/simpletodo/img/logo-icon.svg',
        '/simpletodo/img/logo-icon.png',
        '/simpletodo/img/logo-icon-192x192.png',
        '/simpletodo/img/logo-icon-512x512.png',
        '/simpletodo/img/logo-icon-darktech.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});