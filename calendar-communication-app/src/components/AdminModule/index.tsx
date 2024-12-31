import React from 'react';
import CompanyManagement from './CompanyManagement';
import CommunicationMethodManagement from './CommunicationMethodManagement';

const AdminModule: React.FC = () => {
    return (
        <div>
            <h1>Admin Module</h1>
            <CompanyManagement />
            <CommunicationMethodManagement />
        </div>
    );
};

export default AdminModule;