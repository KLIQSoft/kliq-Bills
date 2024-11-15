window.onload = () => {
  const table = document.querySelector(".itemListTable table");
  const colCount = table.rows[0].cells.length;
  const panels = document.querySelectorAll(".panel-row td");

  panels.forEach((panel) => panel.setAttribute("colspan", colCount));

  const acc = document.querySelectorAll(".itemAccordion");
  acc.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("itemActive");
      const panel = item
        .closest("tr")
        .nextElementSibling.querySelector(".itemPanel");
      const panelRow = item.closest("tr").nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("active");
        panelRow.style.height = "0";
      } else {
        setTimeout(() => {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
          panel.classList.add("active");
          panelRow.style.height = "auto";
        }, 100); // Adjust the delay time as needed
      }
    });
  });
};

// window.onload = () => {
//   const table = document.querySelector(".itemListTable table");
//   const colCount = table.rows[0].cells.length;
//   const panels = document.querySelectorAll(".panel-row td");

//   panels.forEach((panel) => panel.setAttribute("colspan", colCount));

//   const acc = document.querySelectorAll(".itemAccordion");
//   acc.forEach((item) => {
//     item.addEventListener("click", () => {
//       item.classList.toggle("itemActive");
//       const panel = item
//         .closest("tr")
//         .nextElementSibling.querySelector(".itemPanel");
//       const panelRow = item.closest("tr").nextElementSibling;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//         panel.classList.remove("active");
//         panelRow.style.height = "0";
//       } else {
//         panel.style.maxHeight = `${panel.scrollHeight}px`;
//         panel.classList.add("active");
//         panelRow.style.height = "auto";
//       }
//     });
//   });
// };
