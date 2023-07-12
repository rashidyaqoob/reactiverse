import React from "react";
import "./Chart.scss";

function Chart({data})  {

  const total_value = data.reduce((a, b) => a + b.value, 0);
  const convertToPercent = (num) => Math.round((num / total_value) * 100);
  const convertToDegrees = (num) => Math.round((num / 100) * 360);

  console.log('data', data)
  const css_string = data
    .reduce((items, item, index, array) => {
      items.push(item);
      console.log(item)
      console.log('items',items)


      item.count = item.count || 0;
      item.count += array[index - 1]?.count || item.count;
      item.start_value = array[index - 1]?.count ? array[index - 1].count : 0;
      item.end_value = item.count += item.value;
      item.start_percent = convertToPercent(item.start_value);
      item.end_percent = convertToPercent(item.end_value);
      item.start_degrees = convertToDegrees(item.start_percent);
      item.end_degrees = convertToDegrees(item.end_percent);

      return items;
    }, [])
    .map((chart, index) => {
      const { start_degrees, end_degrees } = chart;
      return ` var(--color-pink-${(index + 1) * 100}) ${start_degrees}deg ${end_degrees}deg`;
    })
    .join();

  return (
    <div>
      
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='w-full h-full rounded-full'>
          <clipPath id='hole'>
            <path d='M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64' />
          </clipPath>

          <foreignObject x='0' y='0' width='100' height='100' clipPath='url(#hole)'>
            <div
              xmlns='http://www.w3.org/1999/xhtml'
              className='w-full h-full'
              style={{
                background: `conic-gradient(${css_string})`,
              }}
            />
          </foreignObject>
        </svg>
        
      </div>
  )

}

// Chart.propTypes = {
//   /** Shape of the data to drive the chart */
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       value: PropTypes.number.isRequired,
//       color: PropTypes.string,
//     })
//   ).isRequired,
// };

export default Chart;