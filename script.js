/* ============================================================
   Rashid Muneer: Local SEO Specialist  ·  script.js
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a link is tapped
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Active nav link by current file ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").split("/").pop();
    if (href === path) a.classList.add("active");
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : null;
    });
  });

  /* ---- Contact form -> mailto (no backend) ---- */
  var sendBtn = document.getElementById("sendBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var name = v("f-name"), email = v("f-email"), biz = v("f-biz"), msg = v("f-msg");
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Business & city: " + biz + "\n\n" +
        msg;
      var subject = "Local SEO enquiry: " + (biz || name || "new project");
      window.location.href =
        "mailto:therashidmuneer010@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---- Reveal on scroll (respects reduced motion) ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll("[data-reveal]");
  if (!reduce && "IntersectionObserver" in window && els.length) {
    els.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
