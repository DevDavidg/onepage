document.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initSmoothScroll();
  initProductTabs();
  initCarousel();
});

function initFormValidation() {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const email = document.getElementById("email").value.trim();
      const comentario = document.getElementById("comentario").value.trim();

      if (!nombre || !apellido || !email || !comentario) {
        alert("Por favor completa todos los campos");
        return;
      }

      if (!isValidEmail(email)) {
        alert("Por favor ingresa un email válido");
        return;
      }

      alert("¡Mensaje enviado exitosamente!");
      form.reset();
    });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href === "#" || href === "") return;

      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  });
}

function initProductTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function initCarousel() {
  const carouselElement = document.getElementById("carouselHero");

  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      wrap: true,
      keyboard: true,
    });
  }
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});
