import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { data } from './PieData';

ChartJS.register(ArcElement, Tooltip, Legend);



export function ChartPie() {
  return <Pie data={data} />;
}
