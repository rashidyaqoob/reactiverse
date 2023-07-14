import React from "react";
import "./Chart.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartPie({ applesLength, mangoesLength, orangesLength }) {
  const data = {
    labels: ["Apples", "Oranges", "Mangoes"],
    datasets: [
      {
        label: "# of Votes",
        data: [applesLength, orangesLength, mangoesLength],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log("inChartpie", applesLength, orangesLength, mangoesLength);
  return (
    <div className="chart-pie">
      <Pie data={data} />
    </div>
  );
}
