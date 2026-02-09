export function initSlider() {
  const scroller = document.getElementById("slider");
  const slides = Array.from(scroller.children);
  if (!scroller || slides.length < 2) return;

  // Respecte "prefers-reduced-motion"
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  let i = 0;
  let playing = true;
  const delay = 4000; // ms entre slides

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides[i].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  const tick = () => {
    if (playing) go(i + 1);
  };
  let t = setInterval(tick, delay);

  // Pause au survol / focus, reprise à la sortie
  scroller.addEventListener("mouseenter", () => (playing = false));
  scroller.addEventListener("mouseleave", () => (playing = true));
  scroller.addEventListener("focusin", () => (playing = false));
  scroller.addEventListener("focusout", () => (playing = true));

  // Pause pendant le scroll manuel (touch/drag), reprise après
  let userScrolling;
  scroller.addEventListener("pointerdown", () => (playing = false), {
    passive: true,
  });
  scroller.addEventListener(
    "scroll",
    () => {
      clearTimeout(userScrolling);
      userScrolling = setTimeout(() => {
        playing = true;
      }, 150);
    },
    { passive: true }
  );

  // Recalage d'index quand un slide devient majoritairement visible (optionnel mais propre)
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries)
        if (e.isIntersecting && e.intersectionRatio > 0.6) {
          i = slides.indexOf(e.target);
        }
    },
    { root: scroller, threshold: [0.6] }
  );
  slides.forEach((s) => io.observe(s));

  // Nettoyage si nécessaire (facultatif)
  window.addEventListener("pagehide", () => clearInterval(t));
}
