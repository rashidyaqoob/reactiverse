import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

Chart.register(...registerables);

const ChartContainer = () => {
  const [chartType, setChartType] = useState("pie");

  const destroyChart = () => {
    // Set the chart type to 'none' to destroy the chart
    setChartType("none");
  };

  const createChart = () => {
    // Set the chart type to 'bar' to create a new bar chart
    setChartType("bar");
  };

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My Dataset",
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      x: {
        type: "category", // Use 'category' scale for x-axis
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <button onClick={destroyChart}>Destroy Pie Chart</button>
      <button onClick={createChart}>Create Bar Chart</button>
      {chartType === "pie" && <Pie data={pieChartData} />}
      {chartType === "bar" && (
        <Bar data={barChartData} options={barChartOptions} />
      )}
    </div>
  );
};

export default ChartContainer;
