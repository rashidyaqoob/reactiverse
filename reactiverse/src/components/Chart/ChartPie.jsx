import React from "react";
import "./Chart.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ReactChartJs } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

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

  return (
    <div className="chart-pie">
      <ReactChartJs id="pie-chart" type="pie" data={data} />
    </div>
  );
}
