var itemAcc = document.getElementsByClassName("itemAccordion");
var i;

for (i = 0; i < itemAcc.length; i++) {
  itemAcc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.innerHTML = "Item - Wise Search";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.innerHTML = "Click to Hide Item - Wise Search";
    } 
  });
}