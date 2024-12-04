/* ========== Ham Menu Script - Only for Mobile ========== */

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/* ========== Accordian Script ========== */
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("panel_active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const menuContent = document.getElementById("menuContent");
  const salesmanOverlay = document.getElementById("salesmanOverlay");

  // Toggle function
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("open");
    menuContent.classList.toggle("active");
    salesmanOverlay.classList.toggle("active");

    // Update aria-expanded attribute
    const isExpanded = menuBtn.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isExpanded);
  });

  // Close menu when clicking on overlay
  salesmanOverlay.addEventListener("click", function () {
    menuBtn.classList.remove("open");
    menuContent.classList.remove("active");
    salesmanOverlay.classList.remove("active");

    // Update aria-expanded attribute
    menuBtn.setAttribute("aria-expanded", "false");
  });

  // Optional: Close menu with Esc key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuContent.classList.contains("active")) {
      menuBtn.classList.remove("open");
      menuContent.classList.remove("active");
      salesmanOverlay.classList.remove("active");

      // Update aria-expanded attribute
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});
