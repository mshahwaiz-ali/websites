document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-site-header], .site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobilePanel = document.querySelector(".mobile-panel");
  const desktopServices = document.querySelector(".nav-services");
  const desktopServicesToggle = document.querySelector(".nav-services-toggle");
  const mobileServices = document.querySelector(".mobile-services");
  const mobileServicesToggle = document.querySelector(".mobile-services-toggle");

  /* Load the small shared finishing layer on every page. Projects/Partners
     already include it in markup; the guard prevents a duplicate request. */
  if (!document.querySelector('link[href^="extended-pages.css"]')) {
    const finishingStyles = document.createElement("link");
    finishingStyles.rel = "stylesheet";
    finishingStyles.href = "extended-pages.css?v=2";
    document.head.appendChild(finishingStyles);
  }

  const normalizePath = (value) => {
    const path = (value || "/").split("?")[0].split("#")[0];
    if (path === "/" || path.endsWith("/index.html")) return "/";
    return path.split("/").pop() || "/";
  };

  const currentPath = normalizePath(window.location.pathname);

  const ensureLink = (parent, href, label, beforeSelector) => {
    if (!parent || parent.querySelector(`a[href="${href}"]`)) return;
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    const before = beforeSelector ? parent.querySelector(beforeSelector) : null;
    parent.insertBefore(link, before || null);
  };

  /* Keep the information architecture identical across legacy/legal pages
     without duplicating navigation logic in every static HTML file. */
  const desktopNav = document.querySelector(".desktop-nav");
  if (desktopNav) {
    ensureLink(desktopNav, "projects.html", "Projects", 'a[href="contact.html"]');
    ensureLink(desktopNav, "partners.html", "Partners", 'a[href="contact.html"]');
  }

  const mobileNavInner = mobilePanel?.querySelector(".mobile-panel-inner") || mobilePanel;
  if (mobileNavInner) {
    ensureLink(mobileNavInner, "projects.html", "Projects", 'a[href="contact.html"]');
    ensureLink(mobileNavInner, "partners.html", "Partners", 'a[href="contact.html"]');
  }

  document.querySelectorAll(".footer-grid").forEach((grid) => {
    const companyColumn = Array.from(grid.children).find((column) =>
      column.querySelector("h3")?.textContent.trim().toLowerCase().includes("company")
    );
    if (!companyColumn) return;
    ensureLink(companyColumn, "projects.html", "Projects", 'a[href="contact.html"]');
    ensureLink(companyColumn, "partners.html", "Partners", 'a[href="contact.html"]');
  });

  /* Reliable current-page state even on pages that predate Projects/Partners. */
  document.querySelectorAll(".desktop-nav > a, .mobile-panel a").forEach((link) => {
    if (link.classList.contains("btn")) return;
    const target = normalizePath(new URL(link.href, window.location.href).pathname);
    if (target === currentPath && !link.hash) link.setAttribute("aria-current", "page");
    else if (link.getAttribute("aria-current") === "page" && target !== currentPath) link.removeAttribute("aria-current");
  });

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 28);
  };

  const closeDesktopServices = () => {
    if (!desktopServices || !desktopServicesToggle) return;
    desktopServices.classList.remove("open");
    desktopServicesToggle.setAttribute("aria-expanded", "false");
  };

  const setMenuIconState = (open) => {
    if (!menuToggle) return;
    menuToggle.classList.toggle("open", open);
    const plainIcon = Array.from(menuToggle.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    if (plainIcon && !menuToggle.querySelector(".menu-toggle-lines")) {
      plainIcon.textContent = open ? "×" : "☰";
    }
  };

  const closeMobileMenu = () => {
    if (!mobilePanel || !menuToggle) return;
    mobilePanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    setMenuIconState(false);
    body.classList.remove("nav-locked");
  };

  if (desktopServices && desktopServicesToggle) {
    if (!desktopServicesToggle.hasAttribute("aria-controls")) {
      const megaMenu = desktopServices.querySelector(".mega-menu");
      if (megaMenu) {
        if (!megaMenu.id) megaMenu.id = "services-mega-menu";
        desktopServicesToggle.setAttribute("aria-controls", megaMenu.id);
      }
    }

    desktopServicesToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = desktopServices.classList.toggle("open");
      desktopServicesToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (menuToggle && mobilePanel) {
    if (!mobilePanel.id) mobilePanel.id = "mobile-navigation";
    menuToggle.setAttribute("aria-controls", mobilePanel.id);

    menuToggle.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      setMenuIconState(isOpen);
      body.classList.toggle("nav-locked", isOpen);
    });
  }

  if (mobileServices && mobileServicesToggle) {
    const list = mobileServices.querySelector(".mobile-services-list");
    if (list) {
      if (!list.id) list.id = "mobile-capabilities";
      mobileServicesToggle.setAttribute("aria-controls", list.id);
    }

    mobileServicesToggle.addEventListener("click", () => {
      const isOpen = mobileServices.classList.toggle("open");
      mobileServicesToggle.setAttribute("aria-expanded", String(isOpen));
      const icon = mobileServicesToggle.querySelector("span");
      if (icon) icon.textContent = isOpen ? "−" : "+";
    });
  }

  document.addEventListener("click", (event) => {
    if (desktopServices && !desktopServices.contains(event.target)) closeDesktopServices();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDesktopServices();
      closeMobileMenu();
    }
  });

  if (mobilePanel) {
    mobilePanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) closeMobileMenu();
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  document.querySelectorAll(".service-accordion-item").forEach((item, index) => {
    const button = item.querySelector(".service-accordion-button");
    const panel = item.querySelector(".service-accordion-panel");
    if (!button || !panel) return;

    if (!panel.id) panel.id = `service-panel-${index + 1}`;
    button.setAttribute("aria-controls", panel.id);
    const initialOpen = item.classList.contains("open");
    button.setAttribute("aria-expanded", String(initialOpen));

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const capabilityTabs = document.querySelectorAll(".capability-tab");
  const capabilityCards = document.querySelectorAll("[data-group].bento-card, .capability-card[data-group]");
  capabilityTabs.forEach((tab, index) => {
    tab.setAttribute("aria-pressed", String(tab.classList.contains("active") || index === 0));
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      capabilityTabs.forEach((node) => {
        node.classList.toggle("active", node === tab);
        node.setAttribute("aria-pressed", String(node === tab));
      });
      capabilityCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.group !== filter;
      });
    });
  });

  const serviceFilters = document.querySelectorAll(".service-filter");
  const serviceGroups = document.querySelectorAll(".service-group[data-group]");
  serviceFilters.forEach((filterButton, index) => {
    filterButton.setAttribute("aria-pressed", String(filterButton.classList.contains("active") || index === 0));
    filterButton.addEventListener("click", () => {
      const filter = filterButton.dataset.filter;
      serviceFilters.forEach((node) => {
        node.classList.toggle("active", node === filterButton);
        node.setAttribute("aria-pressed", String(node === filterButton));
      });
      serviceGroups.forEach((group) => {
        group.hidden = filter !== "all" && group.dataset.group !== filter;
      });
    });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealObserver = !reduceMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -20px" }
      )
    : null;

  document.querySelectorAll(".reveal").forEach((element) => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add("visible");
  });

  const serviceSelect = document.querySelector("#service");
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("service");
    if (requested) {
      const option = Array.from(serviceSelect.options).find((node) => node.value === requested);
      if (option) serviceSelect.value = requested;
    }
  }

  /* Image QA: keep decoding off the main thread where possible. If an asset
     genuinely fails, expose a class for a graceful neutral fallback instead
     of leaving a broken-image icon over premium layouts. */
  document.querySelectorAll("img").forEach((image) => {
    if (!image.hasAttribute("decoding")) image.decoding = "async";
    image.addEventListener("error", () => {
      image.classList.add("asset-error");
      image.closest(".bento-card, .service-media, .story-panel-media, .page-hero-card, .showcase-card, .showcase-hero-media")?.classList.add("asset-error-shell");
    }, { once: true });
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
