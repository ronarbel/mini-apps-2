import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const ChartDisplay = ({ priceData }) => {
  const labels = Object.keys(priceData).sort();
  const prices = labels.map(label => priceData[label]);

  const data = {
    labels,
    datasets: [
      {
        label: 'BPI Prices',
        data: prices,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div id="chart">
      <Line data={data} />
    </div>
  );
};

ChartDisplay.propTypes = {
  priceData: PropTypes.instanceOf(Object).isRequired,
};

export default ChartDisplay;
