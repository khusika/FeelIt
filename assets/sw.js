const CACHE_VERSION = new URL(location).searchParams.get("version");
const STATIC_CACHE_NAME = `static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `dynamic-v${CACHE_VERSION}`;

const APP_SHELL_FILES = [
    "/css/home.min.css",
    "/css/page.min.css",
    "/css/about.min.css",
    "/js/theme.min.js",
    "/site.webmanifest",
    "/offline/index.html",
    "/404.html",
];

const OFFLINE_PAGE = "/offline/index.html";
const NOT_FOUND_PAGE = "/404.html";

const CACHE_BLACKLIST = [
    (url) => url.protocol !== "http:" && url.protocol !== "https:",
    (url) => url.hostname === "localhost",
];

const SUPPORTED_METHODS = ["GET"];

function isBlacklisted(url) {
    return CACHE_BLACKLIST.some((rule) => rule(new URL(url)));
}

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(STATIC_CACHE_NAME)
            .then((cache) => {
                console.log("Service Worker: Caching App Shell");
                return cache.addAll(APP_SHELL_FILES);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
                        console.log("Service Worker: Removing old cache", key);
                        return caches.delete(key);
                    }
                })
            );
        })
        .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (request.method !== "GET" || isBlacklisted(request.url)) {
        return;
    }

    if (APP_SHELL_FILES.includes(new URL(request.url).pathname)) {
        event.respondWith(caches.match(request));
        return;
    }

    event.respondWith(
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            return cache.match(request).then((cachedResponse) => {
                const fetchPromise = fetch(request)
                    .then((networkResponse) => {
                        if (networkResponse.ok) {
                            cache.put(request, networkResponse.clone());
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        if (request.mode === "navigate") {
                            return caches.match(OFFLINE_PAGE);
                        }
                    });

                return cachedResponse || fetchPromise;
            });
        })
    );
});

self.addEventListener("message", (event) => {
    if (event.data && event.data.action === "cache" && event.data.url) {
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            fetch(event.data.url).then((response) => {
                if (response.ok) {
                    cache.put(event.data.url, response);
                }
            });
        });
    }
});