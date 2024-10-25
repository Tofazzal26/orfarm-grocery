import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const BalanceLineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Only month names for x-axis
    datasets: [
      {
        data: [30, 40, 45, 60, 55, 65, 50], // Data points for the line (You can adjust the values if needed)
        borderColor: "#696cff", // Line color (blue)
        backgroundColor: "rgba(105, 108, 255, 0.2)", // Light blue fill under the line
        borderWidth: 2, // Line thickness
        tension: 0.4, // Smooth curve
        fill: true, // Enable fill under the line
        pointBackgroundColor: "#fff", // Point color
        pointBorderColor: "#696cff", // Border around points
        pointRadius: 5, // Radius of points
        pointHoverRadius: 7, // Radius when hovered
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        display: false, // Hide the y-axis numbers and grid
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
  };

  return (
    <div style={{ width: "450px", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceLineChart;
