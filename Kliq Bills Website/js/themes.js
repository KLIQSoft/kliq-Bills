const root = document.querySelector(":root");

// Function to switch theme and save the selection
function switchTheme(theme) {
  if (theme === "default") {
    root.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    switchTheme(savedTheme);
  }
});
