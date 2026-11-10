const staticDevCoffee = "cafeteria-site-v2";

const assets = [
  "./",
  "index.html",
  "css/style.css",
  "js/app.js",
  "manifest.json",
  "images/drinks/drink1.svg",
  "images/drinks/drink2.svg",
  "images/drinks/drink3.svg",
  "images/drinks/drink4.svg",
  "images/drinks/drink5.svg",
  "images/drinks/drink6.svg",
  "images/drinks/drink7.svg",
  "images/drinks/drink8.svg",
  "images/drinks/drink9.svg",
  "images/icons/icon-72x72.svg",
  "images/icons/icon-96x96.svg",
  "images/icons/icon-128x128.svg",
  "images/icons/icon-144x144.svg",
  "images/icons/icon-152x152.svg",
  "images/icons/icon-192x192.svg",
  "images/icons/icon-384x384.svg",
  "images/icons/icon-512x512.svg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => cache.addAll(assets)),
  );
});
