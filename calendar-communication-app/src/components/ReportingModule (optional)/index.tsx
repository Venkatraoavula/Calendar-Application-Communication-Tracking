import React from 'react';
import CommunicationFrequencyReport from './CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './OverdueCommunicationTrends';

const ReportingModule: React.FC = () => {
    return (
        <div>
            <h2>Reporting Module</h2>
            <CommunicationFrequencyReport />
            <EngagementEffectivenessDashboard />
            <OverdueCommunicationTrends />
        </div>
    );
};

export default ReportingModule;