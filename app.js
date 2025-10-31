document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  $("#contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const campos = ["#nombre", "#apellido", "#email", "#comentario"].map((s) =>
      $(s).value.trim()
    );
    const email = campos[2];
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (campos.some((v) => !v)) return alert("Por favor completa todos los campos");
    if (!emailOk) return alert("Por favor ingresa un email válido");

    alert("¡Mensaje enviado exitosamente!");
    e.target.reset();
  });

  for (const a of $$('a[href^="#"]')) {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const t = $(href);
      if (!t) return;
      const y = t.offsetTop - ($(".navbar")?.offsetHeight || 0);
      scrollTo({ top: y, behavior: "smooth" });

      const collapse = $("#navbarNav");
      const bs = bootstrap.Collapse.getInstance(collapse);
      if (collapse?.classList.contains("show") && bs) bs.hide();
    });
  }

  for (const btn of $$(".tab-btn")) {
    btn.addEventListener("click", () => {
      for (const b of $$(".tab-btn")) {
        b.classList.remove("active");
      }
      btn.classList.add("active");
    });
  }

  const c = $("#carouselHero");
  if (c) {
    globalThis.carousel = new bootstrap.Carousel(c, { interval: 5000, wrap: true, keyboard: true });
  }

  window.addEventListener("scroll", () => {
    const n = $(".navbar");
    if (n)
      n.style.boxShadow =
        scrollY > 50 ? "0 2px 15px rgba(0,0,0,0.1)" : "0 2px 10px rgba(0,0,0,0.05)";
  });
});
