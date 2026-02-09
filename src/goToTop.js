export function initGoToTop() {
  const mybutton = document.getElementById("myBtn");
  if (!mybutton) return;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
    }
  });

  mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
