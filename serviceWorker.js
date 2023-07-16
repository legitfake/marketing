const staticAnimeshData = "site-cache-v1";
const assets = [
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/img/blob.svg",
  "/assets/img/profile.png",
  "/assets/img/feedback.png",
  "/assets/img/about/concert.png",
  "/assets/img/about/hotel.png",
  "/assets/img/about/inprogress.png",
  "/assets/img/about/interview.png",
  "/assets/img/about/rfa.png",
  "/assets/img/about/rfa2.png",
  "/assets/img/about/work.png",
  "/assets/img/about/workday.png",
  "/assets/img/portfolio/bakeryAfter.png",
  "/assets/img/portfolio/bakeryBefore.png",
  "/assets/img/portfolio/dentalAfter.png",
  "/assets/img/portfolio/dentalBefore.png",
  "/assets/img/portfolio/massageAfter.png",
  "/assets/img/portfolio/massageBefore.png",
  "/assets/img/portfolio/printAfter.png",
  "/assets/img/portfolio/printBefore.png",
  "/assets/img/portfolio/restaurant.png"
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
