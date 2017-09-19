"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/skills/0.chunk.e7b54.js","d8a97da1bc753988b62f0e21f7821f68"],["/skills/1.chunk.6eb6b.js","dd7d3bb2d5336f0a0908df395e6eabff"],["/skills/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/skills/assets/icons/android-chrome-192x192.png","1ea58b225a597f78adfd987ed164e573"],["/skills/assets/icons/android-chrome-512x512.png","b65626103d4cd30abdb0423e6ab15179"],["/skills/assets/icons/apple-touch-icon.png","4e32b9c4edcb5babb823e4824f90bb8d"],["/skills/assets/icons/favicon-16x16.png","2cbedfd68f59e42b0d03ba3946863ee7"],["/skills/assets/icons/favicon-32x32.png","b9108564a20f06675f60b29337c71b3e"],["/skills/assets/icons/mstile-150x150.png","3eb725b0686148a67f2feb546670b313"],["/skills/bundle.4e737.js","3d5db513f38274dc84a669cc3de69507"],["/skills/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/skills/index.html","b7f5494fec85d34a232fe369446828af"],["/skills/manifest.json","b4f2a3b71d95bb96ade454ba1e479a00"],["/skills/style.b5031.css","a0b77eb94f85bc4b5c5acbb1d5b68300"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],s=new URL(n,self.location),r=createCacheKey(s,hashParamName,t,!1);return[s.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var s=new Request(t,{credentials:"same-origin"});return fetch(s).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});