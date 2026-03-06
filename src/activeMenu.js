export function initActiveMenu() {
  const currentPath = window.location.pathname.replace(/\/$/, "");

  // Handle all navigation links (both parent and child)
  document
    .querySelectorAll("[data-nav-link], [data-nav-child]")
    .forEach((link) => {
      const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

      if (currentPath === linkPath || currentPath.startsWith(linkPath + "/")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");

        // If this is a child link, also activate the parent
        if (link.hasAttribute("data-nav-child")) {
          const parentCategory = link.getAttribute("data-nav-child");
          const parentLink = document.querySelector(
            `[data-nav-parent="${parentCategory}"]`,
          );

          if (parentLink) {
            parentLink.classList.add("active");
            parentLink.setAttribute("aria-current", "page");
          }
        }
      }
    });
}
