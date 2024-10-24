import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6], // Need to define labels (even if not displayed)
    datasets: [
      {
        label: "Sales", // Label is important to avoid undefined issues
        data: [30, 50, 40, 60, 50, 70], // Data points for the line
        borderColor: "#FFA500", // Orange line color
        borderWidth: 5, // Line thickness
        tension: 0.4, // Smooth the curve of the line
        fill: {
          target: "origin",
          above: "rgba(255, 165, 0, 0.3)", // Fill color below the line
        },
        pointRadius: 0, // No points on the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Hide legend (optional)
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowBlur: 10,
        shadowColor: "rgba(255, 165, 0, 0.5)", // Shadow for the line
      },
    },
  };

  return (
    <div style={{ width: "200px", height: "100px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
