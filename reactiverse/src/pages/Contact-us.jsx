import Chart from "../components/Chart/Chart.jsx";
import { ChartPie } from "../components/Chart/ChartPie.jsx";
import VirtualList from "../components/virtual-list/virtual-list";

function ContactUs() {
  return (
    <div>
      This is contact us page
      <h1>Virtual List</h1>
      <div className='grid md:grid-cols-2 gap-4 sm:gap-8'>
        <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
          <ChartPie/>
          {/* <Chart data={[
              {
                name: 'Cluster 1',
                value: 210,
              },
              {
                name: 'Cluster 2',
                value: 30,
              },
              {
                name: 'Cluster 3',
                value: 180,
              },
              {
                name: 'Cluster 4',
                value: 260,
              },
              {
                name: 'Cluster 5',
                value: 60,
              },
            ].sort((a, b) => a.value - b.value)}/> */}
        </div>
      </div>      
      <VirtualList />
    </div>
  );
}

export default ContactUs;
