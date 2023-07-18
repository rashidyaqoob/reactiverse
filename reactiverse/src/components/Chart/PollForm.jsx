import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

Chart.register(...registerables);

function PollForm() {
  const [check, setCheck] = useState();
  const [show, setShow] = useState(false);
  const [fruits, setFruits] = useState([]);
  const onOptionChange = (e) => {
    setCheck(e.target.value);
  };
  const handleFormResults = (e) => {
    e.preventDefault();
    setShow(true);
    setFruits([...fruits, check]);
  };
  const apples = fruits.filter((item) => {
    return item === "apples";
  });
  const oranges = fruits.filter((item) => {
    return item === "oranges";
  });
  const mangoes = fruits.filter((item) => {
    return item === "mangoes";
  });

  const [chartType, setChartType] = useState("pie");

  const destroyChart = () => {
    // Set the chart type to 'none' to destroy the chart
    setChartType("none");
  };

  const createBarChart = () => {
    // Set the chart type to 'bar' to create a new bar chart
    setChartType("bar");
  };
  const createPieChart = () => {
    // Set the chart type to 'bar' to create a new bar chart
    setChartType("pie");
  };

  const pieChartData = {
    labels: ["Apple", "Mango", "Orange"],
    datasets: [
      {
        label: "My Dataset",
        data: [apples.length, mangoes.length, oranges.length],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  };

  const barChartData = {
    labels: ["Apple", "Mango", "Orange"],
    datasets: [
      {
        label: "Sales",
        data: [apples.length, mangoes.length, oranges.length],
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
    <div className="pollform">
      <h6>Which of the category do you like ?</h6>
      <form onSubmit={handleFormResults} className="form">
        <input
          onChange={onOptionChange}
          id="apples"
          type="radio"
          name="fruits"
          //   checked={check === "checked"}
          value="apples"
        ></input>
        <label htmlFor="apples">Apples</label>
        <br></br>
        <input
          onChange={onOptionChange}
          id="oranges"
          type="radio"
          name="fruits"
          value="oranges"
        ></input>
        <label htmlFor="oranges">Oranges</label>
        <br></br>
        <input
          onChange={onOptionChange}
          id="Mangoes"
          type="radio"
          name="fruits"
          value="mangoes"
        ></input>
        <label htmlFor="Mangoes">Mangoes</label>
        <br></br>
        <input
          type="submit"
          value="Submit your vote"
          className="button-submit bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        ></input>
      </form>
      {check && show ? (
        <div className="chart-pie">
          <button
            onClick={destroyChart}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Destroy Chart
          </button>
          <button
            onClick={createBarChart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Bar Chart
          </button>
          <button
            onClick={createPieChart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Pie Chart
          </button>
          {chartType === "pie" && <Pie data={pieChartData} />}
          {chartType === "bar" && (
            <Bar data={barChartData} options={barChartOptions} />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PollForm;
