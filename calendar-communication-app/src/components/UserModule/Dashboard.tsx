import React from 'react';
import { useEffect, useState } from 'react';
import { fetchCompanies } from '../../services/api';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            const data = await fetchCompanies();
            setCompanies(data);
        };
        getCompanies();
    }, []);

    return (
        <div className="dashboard">
            <h1>Communication Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Last Five Communications</th>
                        <th>Next Scheduled Communication</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>
                                {company.lastCommunications.map((comm, index) => (
                                    <div key={index}>
                                        {comm.type} on {comm.date}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {company.nextCommunication.type} on {company.nextCommunication.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;