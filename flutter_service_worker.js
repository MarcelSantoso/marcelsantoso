'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1c9fd7f667f0acc698c51d2e29e08cd7",
"index.html": "8b9abfe8c7ec86eb855152a0c7c79147",
"/": "8b9abfe8c7ec86eb855152a0c7c79147",
"main.dart.js": "4e6104f814ee755a0e1d011e756fca28",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14533758d5adebb52c270151b0335f00",
"assets/AssetManifest.json": "4ebf16500a65b66b9134116c91911932",
"assets/NOTICES": "72f8e543a80495fbe442d015e44b9ee2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/rspik-4.png": "ec624f45e81fc514881391739a1fced4",
"assets/assets/images/activesg-5.png": "bc9278adb11aef33b2b76a1e6497b124",
"assets/assets/images/activesg-4.png": "743c8d0d0b714566c7eb68002975bb6e",
"assets/assets/images/rspik-3.png": "baa5501b5bb294f27bb6595f93f2a127",
"assets/assets/images/rspik-2.png": "602fd96d0f97e1cd55e9ff65fd3c7b57",
"assets/assets/images/activesg-1.png": "b11f681654594408081d94a907db362e",
"assets/assets/images/activesg-3.png": "3580fca1961cb24f26b7382163605c67",
"assets/assets/images/rspik-1.png": "811ff8558f2456ba26988efbaada96ac",
"assets/assets/images/activesg-2.png": "d6a26c1755f9c90eb2450f966b7c52a1",
"assets/assets/images/tbs-1.png": "29cc411ba60e2df20741ce3006714945",
"assets/assets/images/gmail.png": "bcb7da3b0772db5b4294eeeb8b6c0553",
"assets/assets/images/truenft-3.png": "25fe0e4b0a14a48fd8823b5d4155d0c4",
"assets/assets/images/imc-1.png": "b473dfb5a394ebee79976281c492eccc",
"assets/assets/images/bmkg.png": "11bb2d959e58505b7417bf1cf5d7ab3f",
"assets/assets/images/truenft-2.png": "af2ba044e0c75e91bfc6e1c3397c8ab2",
"assets/assets/images/tbs-2.png": "ecc7de266d2c119c2b21fb6e591c7481",
"assets/assets/images/imc-2.png": "48681c9ee07718d28e38285c2a4efdd7",
"assets/assets/images/imc-3.png": "846364b6628c8e37cbcf9c665111b736",
"assets/assets/images/background.jpg": "68172f69261ac433cffd7a21ae466afc",
"assets/assets/images/truenft-1.png": "16218f2cd3b438e2f30cab65fe2cc863",
"assets/assets/images/tbs-3.png": "47912be2e2b1d08abf513a4ec1844c3c",
"assets/assets/images/persist-1.png": "00845ac18920da93482f78f67a20581c",
"assets/assets/images/Zignaly-3.png": "fbc8d856d5fd9ea3f4e77566b8e130ff",
"assets/assets/images/pawoon-1.png": "18bf8ac4ec7e1c2a5f4aaa217649c0de",
"assets/assets/images/Zignaly-2.png": "bf9cebeec99411690cee024d7c4c28d4",
"assets/assets/images/codina-1.png": "e7b47e5be5cccd746ccfd59da19eeb2f",
"assets/assets/images/codina-3.png": "217052339cd79f141c1ff8cec24e88ac",
"assets/assets/images/persist-2.png": "ddf6d8af5fa27f64514983686841ac71",
"assets/assets/images/pawoon-2.png": "8c54d4edb3ac7e3b279a861b93ec5542",
"assets/assets/images/pawoon-3.png": "1b8715c41d096916416029360ea45db1",
"assets/assets/images/persist-3.png": "3a85493bb6a255d5d632500d14eebf0d",
"assets/assets/images/Zignaly-1.png": "28cd66ba2a0aeb72ddf21656927a8ede",
"assets/assets/images/codina-2.png": "2b34912d294be1fcce1579df8e5e3881",
"assets/assets/images/logo.png": "118b0500f57550b5b9b5939f78142929",
"assets/assets/images/gawe-2.png": "363dfe7d8b2fe0bddadf0b75218eb891",
"assets/assets/images/onezo-3.png": "54d95adc19f065bdfc869ecdead77fd9",
"assets/assets/images/onezo-2.png": "18fb375b4bfc103257c2a4b5a9748713",
"assets/assets/images/pawoon-6.png": "570dfc10817ac649a5d7753b89776b87",
"assets/assets/images/gawe-3.png": "c5cdb42458159d7d35156afbfec68989",
"assets/assets/images/ico-1.png": "c4bae439dace457cb9ed01d238dd5e3f",
"assets/assets/images/Zignaly-4.png": "6980b672b78867d3587b71b8622733f9",
"assets/assets/images/linkedin.png": "780a3517324e1ee68a127b26ff78eadf",
"assets/assets/images/profile.png": "731e56a8f46fca6fd4a1c97563d4e365",
"assets/assets/images/gawe-1.png": "1d9e018132441de21552db0fd8184eda",
"assets/assets/images/pawoon-4.png": "7e0a339abeb6da64c110ef06878676ce",
"assets/assets/images/onezo-1.png": "fdda29b738f639c193637138b8d2bf31",
"assets/assets/images/pawoon-5.png": "773f531b163be56b64e8981a62d5c5a5",
"assets/assets/images/ico-2.png": "d2e1e6258d708da100a72cdb7a8fd1b8",
"assets/assets/images/codina-4.png": "f6e2c5bb7024bbd9f29b53918f8aadc5",
"assets/assets/images/sempoa-2.png": "6e4c8f666fdc2fb05fc1376112e27aff",
"assets/assets/images/sempoa-3.png": "dbcf3d2d42eb635c3db91d449ebfeadd",
"assets/assets/images/sempoa-1.png": "9d842975803c79bc61eb633e8aa9ffa5",
"assets/assets/images/marcel.png": "08b64f5e9bc87b7173b3b96084410cdd",
"assets/assets/images/bg.jpg": "43da98083a050210d144c1eb052b4148",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
