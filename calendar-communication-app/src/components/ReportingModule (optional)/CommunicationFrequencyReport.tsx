import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchCommunicationFrequency } from '../../services/api';

const CommunicationFrequencyReport = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Communication Frequency',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    });

    useEffect(() => {
        const getData = async () => {
            const frequencyData = await fetchCommunicationFrequency();
            const labels = frequencyData.map(item => item.method);
            const values = frequencyData.map(item => item.count);

            setData({
                labels,
                datasets: [
                    {
                        label: 'Communication Frequency',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            });
        };

        getData();
    }, []);

    return (
        <div>
            <h2>Communication Frequency Report</h2>
            <Bar data={data} />
        </div>
    );
};

export default CommunicationFrequencyReport;