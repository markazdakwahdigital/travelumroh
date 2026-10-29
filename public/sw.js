const CACHE='mdd-travel-shell-v2';
const ROOT='/travelumroh/';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([ROOT+'manifest.webmanifest'])));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('mdd-travel-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;if(request.mode==='navigate'){event.respondWith(fetch(request,{cache:'no-store'}).catch(()=>caches.match(ROOT)));return;}event.respondWith(fetch(request).catch(()=>caches.match(request)))});
