var ctx2 = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Income", "Expenses"], // Labels for the sections
    datasets: [
      {
        label: "My Pie Chart",
        data: [300, 300], // Data for each section
        backgroundColor: ["rgba(255, 154, 159)", "rgba(141, 95, 165)"], // Background color for each section
        borderColor: ["rgba(255, 154, 159)", "rgba(141, 95, 165)"], // Border color for each section
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});
