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

// Inner Tabs
const displayContent = (id) => {
  const tabs = document.querySelectorAll(".tab1");
  const contents = document.querySelectorAll(".content1");
  const selectMenu = document.querySelector(".select-menu1");
  tabs.forEach((tab) => tab.classList.remove("innerActive"));
  contents.forEach((content) => content.classList.remove("innerActive"));
  document
    .querySelector(`.tab[onclick="displayContent('${id}')"]`)
    .classList.add("innerActive");
  document.getElementById(id).classList.add("innerActive");
  // Update select menu
  selectMenu.value = id;
};
// Initialize the first tab and content as active
document.querySelector(".tab1").classList.add("innerActive");
document.querySelector(".content1").classList.add("innerActive");
