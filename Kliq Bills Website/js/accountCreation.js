function showContent(id) {
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");

  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document
    .querySelector(".tab[onclick=\"showContent('" + id + "')\"]")
    .classList.add("active");

  syncSelectMenu(id);
}

function syncSelectMenu(id) {
  var selectMenu = document.querySelector(".select-menu");
  selectMenu.value = id;
}

function syncTabContent() {
  var selectedValue = document.querySelector(".select-menu").value;
  showContent(selectedValue);
}

window.addEventListener("resize", syncTabContent);
window.addEventListener("load", syncTabContent);
