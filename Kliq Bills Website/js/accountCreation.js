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

// For Details, Parameters, and GST Tabs in Purchase Screen

// function showContent1(id) {
//   var contents = document.getElementsByClassName("content2");
//   for (var i = 0; i < contents.length; i++) {
//     contents[i].classList.remove("active");
//   }
//   document.getElementById(id).classList.add("active");
//   var tabs = document.getElementsByClassName("tab2");
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].classList.remove("active");
//   }
//   document
//     .querySelector(".tab2[onclick=\"showContent1('" + id + "')\"]")
//     .classList.add("active");
// }

function showContent1(id) {
  var contents = document.getElementsByClassName("content2");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
  var tabs = document.getElementsByClassName("tab2");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document
    .querySelector(".tab2[onclick=\"showContent1('" + id + "')\"]")
    .classList.add("active");
  syncSelectMenu1(id);
  syncTabContent1(id);
}

function syncSelectMenu1(id) {
  var selectMenu1 = document.querySelector(".select-menu1");
  if (selectMenu1) {
    selectMenu1.value = id;
  }
}

function syncTabContent1(id) {
  if (!id) {
    // If no id is provided, find the active tab
    var activeTab = document.querySelector(".tab2.active");
    if (activeTab) {
      id = activeTab.getAttribute("onclick").match(/'([^']+)'/)[1];
    }
  }
  if (id) {
    document.getElementById(id).classList.add("active");
    document
      .querySelector(".tab2[onclick=\"showContent1('" + id + "')\"]")
      .classList.add("active");
  }
}
