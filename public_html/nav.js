/* =========================
   GLOBAL NAV + UI BEHAVIOR
   Single source, no dupes
========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------
     1) Page transition (fade)
     - Prevents ugly flashes
     - Adds smooth navigation between internal pages
  ------------------------- */
  document.body.classList.add("page-loaded");

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const hrefRaw = (link.getAttribute("href") || "").trim();

    // Ignore: new tab, downloads, mailto/tel, JS pseudo links
    if (link.target === "_blank") return;
    if (link.hasAttribute("download")) return;
    if (!hrefRaw || hrefRaw === "#") return;
    if (hrefRaw.startsWith("mailto:") || hrefRaw.startsWith("tel:") || hrefRaw.startsWith("javascript:")) return;

    // Ignore absolute external links
    if (/^https?:\/\//i.test(hrefRaw)) return;

    // Split hash from URL (if present)
    const parts = hrefRaw.split("#");
    const pathPart = parts[0];        // may be "" for same-page anchors
    const hashPart = parts[1] ? ("#" + parts[1]) : "";

    // 1) Same-page anchor: smooth scroll but keep URL clean (no #hash)
    if (hashPart && (!pathPart || pathPart === "./" || pathPart === window.location.pathname.split("/").pop() || pathPart === "/")) {
      const target = document.querySelector(hashPart);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Clean address bar (remove hash)
      window.setTimeout(function () {
        history.replaceState(null, "", window.location.pathname);
      }, 10);

      return;
    }

    // 2) Cross-page anchor (services.html#civill):
    // Store target in sessionStorage, navigate to the page WITHOUT the hash, then scroll on load.
    if (hashPart && pathPart) {
      try {
        sessionStorage.setItem("__scrollTarget", hashPart);
        sessionStorage.setItem("__scrollPath", pathPart.replace(/^\//, ""));
      } catch (err) {
        // If storage fails, we still navigate (worst case: no auto scroll)
      }
    }

    const nextHref = pathPart || hrefRaw;

    e.preventDefault();
    document.body.classList.add("page-exit");

    // Small delay to let CSS animation play
    window.setTimeout(function () {
      window.location.href = nextHref;
    }, 160);
  });


  /* -------------------------
     2) Mobile menu toggle
  ------------------------- */
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function () {
      navMenu.classList.toggle("nav-open");
    });
  }

  /* -------------------------
     3) Mobile Services dropdown
  ------------------------- */
  const servicesLink = document.querySelector(".has-dropdown > a");
  if (servicesLink) {
    servicesLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        servicesLink.parentElement.classList.toggle("dropdown-open");
      }
    });
  }

  /* -------------------------
     4) Accordion (services page)
     HTML: .accordion-item > .accordion-header + .accordion-body
  ------------------------- */
  const items = document.querySelectorAll(".accordion-item");

  items.forEach(function (item) {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");
    if (!header || !body) return;

    body.style.maxHeight = "0px";

    header.addEventListener("click", function () {
      const isOpen = item.classList.contains("active");

      // Close others
      items.forEach(function (other) {
        if (other !== item) {
          other.classList.remove("active");
          const otherBody = other.querySelector(".accordion-body");
          if (otherBody) otherBody.style.maxHeight = "0px";
        }
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        body.style.maxHeight = "0px";
      }
    });
  });

  /* -------------------------
     5) Mobile header hide/show on scroll
  ------------------------- */
  let lastScroll = 0;
  const headerEl = document.querySelector(".site-header");

  function mobileHeaderScroll() {
    if (!headerEl) return;

    if (window.innerWidth > 900) {
      headerEl.classList.remove("header-hide");
      return;
    }

    const current = window.pageYOffset || 0;
    if (current > lastScroll) headerEl.classList.add("header-hide");
    else headerEl.classList.remove("header-hide");

    lastScroll = current;
  }

  window.addEventListener("scroll", mobileHeaderScroll, { passive: true });
  window.addEventListener("resize", mobileHeaderScroll);
  mobileHeaderScroll();

  /* -------------------------
     6) Drag scroll for carousels
     Works for all .service-carousel blocks
     - Desktop: mouse drag
     - Mobile: touch drag
     Protects from accidental click while dragging
  ------------------------- */
  document.querySelectorAll(".service-carousel").forEach(function (scroller) {

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let dragDistance = 0;

    function startDrag(x) {
      isDown = true;
      startX = x;
      startScrollLeft = scroller.scrollLeft;
      dragDistance = 0;
      scroller.classList.add("dragging");
    }

    function moveDrag(x) {
      if (!isDown) return;
      const walk = x - startX;
      dragDistance = Math.max(dragDistance, Math.abs(walk));
      scroller.scrollLeft = startScrollLeft - walk;
    }

    function endDrag() {
      if (!isDown) return;
      isDown = false;
      scroller.classList.remove("dragging");

      // Block clicks only if user actually dragged
      if (dragDistance > 6) {
        scroller.classList.add("drag-block-click");
        window.setTimeout(function () {
          scroller.classList.remove("drag-block-click");
        }, 180);
      }
    }

    scroller.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      e.preventDefault();
      startDrag(e.pageX);
    });

    scroller.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      moveDrag(e.pageX);
    });

    window.addEventListener("mouseup", endDrag);
    scroller.addEventListener("mouseleave", endDrag);

    scroller.addEventListener("touchstart", function (e) {
      if (!e.touches || !e.touches[0]) return;
      startDrag(e.touches[0].pageX);
    }, { passive: true });

    scroller.addEventListener("touchmove", function (e) {
      if (!isDown || !e.touches || !e.touches[0]) return;
      moveDrag(e.touches[0].pageX);
    }, { passive: true });

    scroller.addEventListener("touchend", endDrag);

    // Capture click and cancel if drag happened
    scroller.addEventListener("click", function (e) {
      if (scroller.classList.contains("drag-block-click")) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  });

});
