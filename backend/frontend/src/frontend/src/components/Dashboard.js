import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const [esgData, setEsgData] = useState([]);
    
    useEffect(() => {
        const fetchEsgData = async () => {
            try {
                const response = await axios.get('/api/esg-data');
                setEsgData(response.data);
            } catch (error) {
                console.error('Error fetching ESG data:', error);
            }
        };
        fetchEsgData();
    }, []);

    const data = {
        labels: esgData.map(item => item.company),
        datasets: [
            {
                label: 'ESG Score',
                data: esgData.map(item => item.score),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>ESG Scores</h2>
            <Bar data={data} />
        </div>
    );
};

export default Dashboard;
