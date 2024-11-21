import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Basic() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Revenue Monthly',
          data: [540, 325, 702, 620, 540, 325, 702, 620, 540, 325, 200, 100],
          backgroundColor: ['rgba(39, 95, 218, 0.705)'],
          borderColor: ['rgba(39, 95, 218, 0.705)'],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
