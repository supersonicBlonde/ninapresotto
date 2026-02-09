export function initActiveMenu() {
  const currentPath = window.location.pathname.replace(/\/$/, "");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

    if (currentPath === linkPath || currentPath.startsWith(linkPath + "/")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}
