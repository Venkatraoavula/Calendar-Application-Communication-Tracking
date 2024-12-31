import React from 'react';

const EngagementEffectivenessDashboard: React.FC = () => {
    // Sample data for demonstration purposes
    const communicationMethods = [
        { method: 'Email', successRate: 75 },
        { method: 'Phone Call', successRate: 60 },
        { method: 'LinkedIn Message', successRate: 80 },
        { method: 'LinkedIn Post', successRate: 50 },
    ];

    return (
        <div className="engagement-effectiveness-dashboard">
            <h2>Engagement Effectiveness Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Communication Method</th>
                        <th>Success Rate (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {communicationMethods.map((item, index) => (
                        <tr key={index}>
                            <td>{item.method}</td>
                            <td>{item.successRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EngagementEffectivenessDashboard;