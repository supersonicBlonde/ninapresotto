export function initStickyHeader() {
  const header = document.getElementById("site-header");
  let lastScroll = 0;
  let hasScrolledDown = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Retour en haut : reset tout
    if (currentScroll <= 50) {
      header.classList.remove("fixed", "header-hidden", "header-compact");
      hasScrolledDown = false;
      lastScroll = currentScroll;
      return;
    }

    // Premier scroll down : cacher puis montrer compact après l'animation
    if (currentScroll > lastScroll && !hasScrolledDown) {
      header.classList.add("fixed", "header-hidden");
      hasScrolledDown = true;

      // Attendre la fin de l'animation de disparition (0.6s) puis réapparaître compact
      setTimeout(() => {
        header.classList.add("header-compact");
        header.classList.remove("header-hidden");
      }, 700); // 600ms animation + 100ms marge
    }
    // Déjà scrollé : juste rester compact et fixed
    else if (hasScrolledDown) {
      header.classList.add("fixed", "header-compact");
      header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
  });
}
