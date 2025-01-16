{
  /* <canvas id="myBarChart" width="800" height="400"></canvas> */
}

var ctx = document.getElementById("myBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Apr 2024",
      "May 2024",
      "Jun 2024",
      "Jul 2024",
      "Aug 2024",
      "Sep 2024",
      "Oct 2024",
      "Nov 2024",
      "Dec 2024",
      "Jan 2025",
      "Feb 2025",
      "Mar 2025",
    ],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 130, 160, 180, 200, 220, 210, 190, 240, 250, 230], // User-defined sales values
        backgroundColor: "rgba(69, 169, 99, 1)",
        borderColor: "rgba(1, 99, 30, 1)",
        borderWidth: 2,
      },
      {
        label: "Purchases",
        data: [100, 120, 110, 140, 160, 180, 200, 190, 170, 210, 220, 210], // User-defined purchase values
        backgroundColor: "rgba(225, 95, 96, 1)",
        borderColor: "rgba(168, 14, 14, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // You can modify the step size based on the maximum value
        },
      },
    },
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
