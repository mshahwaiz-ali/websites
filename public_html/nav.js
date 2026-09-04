document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const mobilePanel = document.querySelector(".mobile-panel");
  const desktopServices = document.querySelector(".nav-services");
  const desktopServicesToggle = document.querySelector(".nav-services-toggle");
  const mobileServices = document.querySelector(".mobile-services");
  const mobileServicesToggle = document.querySelector(".mobile-services-toggle");

  const closeDesktopServices = () => {
    if (!desktopServices || !desktopServicesToggle) return;
    desktopServices.classList.remove("open");
    desktopServicesToggle.setAttribute("aria-expanded", "false");
  };

  const closeMobileMenu = () => {
    if (!mobilePanel || !menuToggle) return;
    mobilePanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
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
      menuToggle.textContent = isOpen ? "×" : "☰";
      body.classList.toggle("nav-locked", isOpen);
    });
  }

  if (mobileServices && mobileServicesToggle) {
    mobileServicesToggle.addEventListener("click", () => {
      const isOpen = mobileServices.classList.toggle("open");
      mobileServicesToggle.setAttribute("aria-expanded", String(isOpen));
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

  document.querySelectorAll(".service-accordion-item").forEach((item) => {
    const button = item.querySelector(".service-accordion-button");
    if (!button) return;
    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const capabilityTabs = document.querySelectorAll(".capability-tab");
  const capabilityCards = document.querySelectorAll(".capability-card[data-group]");
  capabilityTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      capabilityTabs.forEach((node) => node.classList.toggle("active", node === tab));
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
      serviceFilters.forEach((node) => node.classList.toggle("active", node === filterButton));
      serviceGroups.forEach((group) => {
        group.hidden = filter !== "all" && group.dataset.group !== filter;
      });
    });
  });

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          instance.unobserve(entry.target);
        });
      }, { threshold: 0.12 })
    : null;

  document.querySelectorAll(".reveal").forEach((element) => {
    if (observer) observer.observe(element);
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
