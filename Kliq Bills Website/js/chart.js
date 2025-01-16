var ctx1 = document.getElementById("myChart").getContext("2d");
var myChart1 = new Chart(ctx1, {
  type: "line",
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
    ],
    datasets: [
      {
        label: "Data",
        data: [10, 30, 50, 70, 90, 10, 100, 80, 60, 70, 40],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },
  options: { scales: { y: { beginAtZero: true, max: 100 } } },
});
