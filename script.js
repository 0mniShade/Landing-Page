// =======================
// WAIT FOR PAGE LOAD
// =======================
document.addEventListener("DOMContentLoaded", () => {

  // 🌙 Load Dark Mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }

  // 🎬 Fade IN
  document.body.classList.remove("fade-out");

  // 🎬 Handle page transitions
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && !href.startsWith("#")) {
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});

// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}
