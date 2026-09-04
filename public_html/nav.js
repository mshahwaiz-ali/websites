document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-site-header], .site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobilePanel = document.querySelector(".mobile-panel");
  const desktopServices = document.querySelector(".nav-services");
  const desktopServicesToggle = document.querySelector(".nav-services-toggle");
  const mobileServices = document.querySelector(".mobile-services");
  const mobileServicesToggle = document.querySelector(".mobile-services-toggle");

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
    desktopServicesToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = desktopServices.classList.toggle("open");
      desktopServicesToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (menuToggle && mobilePanel) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      setMenuIconState(isOpen);
      body.classList.toggle("nav-locked", isOpen);
    });
  }

  if (mobileServices && mobileServicesToggle) {
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
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) closeMobileMenu();
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  document.querySelectorAll(".service-accordion-item").forEach((item) => {
    const button = item.querySelector(".service-accordion-button");
    const panel = item.querySelector(".service-accordion-panel");
    if (!button || !panel) return;

    const initialOpen = item.classList.contains("open");
    button.setAttribute("aria-expanded", String(initialOpen));

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const capabilityTabs = document.querySelectorAll(".capability-tab");
  const capabilityCards = document.querySelectorAll("[data-group].bento-card, .capability-card[data-group]");
  capabilityTabs.forEach((tab) => {
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
  serviceFilters.forEach((filterButton) => {
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

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -24px" }
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

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
