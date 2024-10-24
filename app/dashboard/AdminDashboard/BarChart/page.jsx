import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "2023 Sales",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "#03c3ec", // Color for 2023 Sales
        borderColor: "#ffffff", // Gap color between the bars
        borderWidth: 3, // Width of the gap between colors
        borderRadius: { topLeft: 10, topRight: 10 }, // Rounded corners at the top
        barThickness: 20, // Width of the bars
      },
      {
        label: "2024 Sales",
        data: [75, 69, 90, 91, 66, 65],
        backgroundColor: "#696cff", // Color for 2024 Sales
        borderColor: "#ffffff", // Gap color between the bars
        borderWidth: 3, // Width of the gap between colors
        borderRadius: { bottomLeft: 10, bottomRight: 10 }, // Rounded corners at the bottom
        barThickness: 20, // Width of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        stacked: true, // Stack the bars on x-axis
        barPercentage: 0.4, // Adjust bar percentage for spacing
        categoryPercentage: 0.5, // Adjust category percentage for spacing
      },
      y: {
        stacked: true, // Stack the bars on y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="md:w-[650px]">
      {" "}
      {/* Set the width of the chart container */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
