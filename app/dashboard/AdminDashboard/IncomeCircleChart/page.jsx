import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeCircleChart = () => {
  const data = {
    datasets: [
      {
        data: [65, 35], // $65 value and remaining part
        backgroundColor: ["#696CFF", "#e0e0e0"], // Main color and background color
        borderWidth: 2, // Border width
        cutout: "80%", // Inner circle size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    circumference: 360, // Full circle effect
    rotation: 0, // Start from top center
  };

  return (
    <div style={{ width: "55px", height: "55px", position: "relative" }}>
      <Doughnut data={data} options={options} />
      {/* Centered text inside the chart */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        $65
      </div>
    </div>
  );
};

export default IncomeCircleChart;
