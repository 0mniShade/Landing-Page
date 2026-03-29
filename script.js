// =======================
// 🌙 DARK MODE
// =======================

// Load saved mode on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}


// =======================
// 🎬 PAGE TRANSITIONS
// =======================

// Fade IN when page loads
window.addEventListener("load", () => {
  document.body.classList.remove("fade-out");
});

// Fade OUT when navigating
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignore anchor links (#)
    if (href && !href.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // matches CSS transition time
    }
  });
});
