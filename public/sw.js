const version = "v0.2"
const cacheName = "very_cool_project-" + version

const contentToCache = ["/"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      console.log("[Service Worker] Install")
      const cache = await caches.open(cacheName)
      await cache.addAll(contentToCache)
    })()
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      console.log("[Service Worker] Activate")
      const keys = await caches.keys()
      console.log(`[Service Worker] Keys: ${keys}`)
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
  event.respondWith((async () => {
    const response = await caches.match(event.request)
    if (response) {
      return response
    }
    return fetch(event.request)
  })())
})