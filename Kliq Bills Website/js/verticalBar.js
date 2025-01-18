// var ctx2 = document.getElementById("myPieChart").getContext("2d");
// var myPieChart = new Chart(ctx2, {
//   type: "pie",
//   data: {
//     labels: ["Income", "Expenses"], // Labels for the sections
//     datasets: [
//       {
//         label: "My Pie Chart",
//         data: [300, 300], // Data for each section
//         backgroundColor: ["rgba(255, 154, 159)", "rgba(141, 95, 165)"], // Background color for each section
//         borderColor: ["rgba(255, 154, 159)", "rgba(141, 95, 165)"], // Border color for each section
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//   },
// });


// Define dummy functions to generate data
const Utils = {
  months: function (config) {
    const monthNames = [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",

    ];
    return monthNames.slice(0, config.count);
  },
  numbers: function (config) {
    const numbersArray = [];
    for (let i = 0; i < config.count; i++) {
      numbersArray.push(
        Math.floor(Math.random() * (config.max - config.min + 1)) + config.min
      );
    }
    return numbersArray;
  }
};

const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 12 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "GP",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: "#c899dc",
      backgroundColor: "#c899dc"
    },
    {
      label: "NP",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: "#b7dbb5",
      backgroundColor: "#4682b4"
    }
  ]
};

const config = {
  type: "bar", // Change chart type to 'bar'
  data: data,
  options: {}
};

// Render the chart
window.onload = function () {
  var ctx = document.getElementById("myverticalBarChart").getContext("2d");
  new Chart(ctx, config);
};
