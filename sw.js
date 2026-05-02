self.addEventListener("install",e=>{
 e.waitUntil(caches.open("app").then(c=>c.addAll(["./"])));
});

self.addEventListener("fetch",e=>{
 e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
