const CACHE_PREFIX = "staedtetracker-";
const CACHE_NAME = `${CACHE_PREFIX}v0.8`;

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Wichtige Dateien für den Offline-Betrieb speichern
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Alte Versionen des App-Caches löschen
self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames
          .filter(
            name =>
              name.startsWith(CACHE_PREFIX) &&
              name !== CACHE_NAME
          )
          .map(name => caches.delete(name))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // POST-, PUT- und andere Schreibanfragen nicht cachen
  if (request.method !== "GET") {
    return;
  }

  // Supabase und andere externe Server nicht durch diesen Cache leiten
  if (url.origin !== self.location.origin) {
    return;
  }

  const needsFreshVersion =
    request.mode === "navigate" ||
    request.destination === "script" ||
    request.destination === "style";

  if (needsFreshVersion) {
    // Für HTML, JavaScript und CSS zuerst die neue Online-Version holen
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request, {
            cache: "no-store"
          });

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch {
          const cachedResponse = await caches.match(request);

          if (cachedResponse) {
            return cachedResponse;
          }

          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }

          return Response.error();
        }
      })()
    );

    return;
  }

  // Bilder und sonstige statische Dateien dürfen Cache-first verwenden
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      const response = await fetch(request);

      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    })()
  );
});
