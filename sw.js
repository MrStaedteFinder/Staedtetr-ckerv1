const CACHE_PREFIX = "staedtetracker-";
const CACHE_NAME = `${CACHE_PREFIX}v0.21`;
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./germany-city-coordinates.js", "./france-cities.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  const needsFreshVersion = request.mode === "navigate" || request.destination === "script" || request.destination === "style";
  event.respondWith((async () => {
    if (needsFreshVersion) {
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response.ok) (await caches.open(CACHE_NAME)).put(request, response.clone());
        return response;
      } catch {
        return (await caches.match(request)) || (request.mode === "navigate" ? caches.match("./index.html") : Response.error());
      }
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok) (await caches.open(CACHE_NAME)).put(request, response.clone());
    return response;
  })());
});
