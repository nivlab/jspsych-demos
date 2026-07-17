// -------- Mobile menu logic --------
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!button || !nav) return;

  function updateArrow() {
    const bottom =
      nav.scrollHeight - nav.scrollTop <= nav.clientHeight + 10;
    nav.classList.toggle("at-bottom", bottom);
  }

  // Open / close mobile menu
  button.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("menu-open");
    // Recalculate arrow after menu opens
    setTimeout(updateArrow, 50);

  });
  // Update arrow while scrolling
  nav.addEventListener("scroll", updateArrow);

  // close mobile menu when clicking a link that is on the same page
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
});

// -------- Highlight active menu item logic --------
function updateActiveMenu() {
  const current =
    window.location.pathname.replace(/\/$/, "") +
    window.location.hash;

  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  // Clear old active states
  nav.querySelectorAll(".active")
    .forEach(el => el.classList.remove("active"));

  nav.querySelectorAll(".nav-list-link").forEach(link => {
    const url = new URL(link.href);

    if (
      url.pathname.replace(/\/$/, "") + url.hash === current
    ) {
      link.classList.add("active");

      const item = link.closest(".nav-list-item");
      item?.classList.add("active");

      const parent = item?.parentElement?.closest(".nav-list-item");
      parent?.classList.add("active");

      parent?.querySelector(":scope > .nav-list-link")
        ?.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", updateActiveMenu);
window.addEventListener("hashchange", updateActiveMenu);