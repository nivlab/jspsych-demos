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

});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {

    // active state
    document.querySelectorAll(".site-nav a")
      .forEach(a => a.classList.remove("active"));

    link.classList.add("active");

    // activate parent
    const parent = link.closest(".nav-list-item")
      ?.parentElement
      ?.closest(".nav-list-item");

    if (parent) {
      const parentLink = parent.querySelector(":scope > .nav-list-link");
      if (parentLink) parentLink.classList.add("active");
    }

    // close mobile menu
    document.querySelector(".site-nav")
      .classList.remove("open");

    document.body.classList.remove("menu-open");

  });
});