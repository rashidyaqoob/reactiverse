import BarChart from "../components/Chart/Barchart.jsx";
import Chart from "../components/Chart/Chart.jsx";
import { ChartPie } from "../components/Chart/ChartPie.jsx";
import PollForm from "../components/Chart/PollForm.jsx";
import VirtualList from "../components/virtual-list/virtual-list";

function Misc() {
  return (
    <div>
      This is contact us page
      <h1>Virtual List</h1>
      <PollForm />
      <VirtualList />
    </div>
  );
}

export default Misc;
