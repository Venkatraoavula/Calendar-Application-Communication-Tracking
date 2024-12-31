import React from 'react';
import Dashboard from './Dashboard';
import CommunicationAction from './CommunicationAction';
import Notifications from './Notifications';
import CalendarView from './CalendarView';

const UserModule: React.FC = () => {
    return (
        <div>
            <h1>User Module</h1>
            <Dashboard />
            <CommunicationAction />
            <Notifications />
            <CalendarView />
        </div>
    );
};

export default UserModule;