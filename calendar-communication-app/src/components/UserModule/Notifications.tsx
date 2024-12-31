import React from 'react';

const Notifications: React.FC = () => {
    // Sample data for overdue and due communications
    const overdueCommunications = [
        { company: 'Company A', type: 'Email', date: '2023-09-01' },
        { company: 'Company B', type: 'LinkedIn Post', date: '2023-09-05' },
    ];

    const todaysCommunications = [
        { company: 'Company C', type: 'Phone Call', date: '2023-09-15' },
        { company: 'Company D', type: 'LinkedIn Message', date: '2023-09-15' },
    ];

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <div className="overdue-communications">
                <h3>Overdue Communications</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {overdueCommunications.map((comm, index) => (
                            <tr key={index}>
                                <td>{comm.company}</td>
                                <td>{comm.type}</td>
                                <td>{comm.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="todays-communications">
                <h3>Today's Communications</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todaysCommunications.map((comm, index) => (
                            <tr key={index}>
                                <td>{comm.company}</td>
                                <td>{comm.type}</td>
                                <td>{comm.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notifications;