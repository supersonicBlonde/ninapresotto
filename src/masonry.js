import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

function initMasonry() {
  const grid = document.querySelector(".testimonial-grid");
  if (!grid) return;

  // Crée Masonry mais ne force pas encore le layout
  const msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 20,
  });

  // Attend que toutes les images soient chargées avant d’appliquer le layout
  imagesLoaded(grid).on("always", function () {
    msnry.layout();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMasonry);
} else {
  initMasonry();
}
