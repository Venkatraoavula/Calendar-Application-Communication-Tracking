import React from 'react';
import { Line } from 'react-chartjs-2';

const OverdueCommunicationTrends = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Overdue Communications',
                data: data.map(item => item.count),
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Overdue Communication Trends</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default OverdueCommunicationTrends;