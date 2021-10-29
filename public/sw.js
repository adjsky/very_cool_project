const version = "v0.89"
const cacheName = "very_cool_project-" + version

const contentToCache = [
  "/",
  "/icon-32.png",
  "/icon-64.png",
  "/icon-128.png",
  "/icon-256.png",
  "/icon-512.png",
  "/icon-192.png"
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      console.log("[Service Worker] Install")
      const cache = await caches.open(cacheName)
      await cache.addAll(contentToCache)
      console.log("[Service Worker] Cached assets")
    })()
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      console.log("[Service Worker] Activate")
      const keys = await caches.keys()
      await Promise.all(
        keys.map((key) => {
          if (key != cacheName) {
            return caches.delete(key)
          }
        })
      )
    })()
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName)
      const response = await cache.match(event.request)
      if (response) {
        return response
      }
      return fetch(event.request)
    })()
  )
})