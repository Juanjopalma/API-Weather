import React from 'react'
import { getHour } from '../../utils/utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './grafica.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Temperaturas y Humedades de los próximos días',
    },
  },
};


export const Grafica = ({datos}) => {

  datos = datos?.list.filter((elem)=> elem.dt_txt.split(" ")[1] === "15:00:00")
  const labels = datos?.map((e) => e.dt_txt);
  const temperaturas = datos?.map((e) => e.main.temp);
  const humedades = datos?.map((e) => e.main.humidity);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperatura',
        data: temperaturas,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humedad',
        data: humedades,
        borderColor: 'rgb(14, 51, 76)',
        backgroundColor: 'rgb(14, 51, 76, 0.5)',
      },
    ],
  };

  return (
    /* componente Line es la gráfica */
    <div className="grafica">
      <Line options={options} data={data} />
    </div>
  )
}

