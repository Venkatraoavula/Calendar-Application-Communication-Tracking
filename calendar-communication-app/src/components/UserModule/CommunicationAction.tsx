import React, { useState } from 'react';

const CommunicationAction = () => {
    const [communicationType, setCommunicationType] = useState('');
    const [communicationDate, setCommunicationDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to log the communication
        console.log({
            communicationType,
            communicationDate,
            notes,
        });
        // Reset form fields
        setCommunicationType('');
        setCommunicationDate('');
        setNotes('');
    };

    return (
        <div className="communication-action">
            <h2>Log New Communication</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="communicationType">Type of Communication:</label>
                    <select
                        id="communicationType"
                        value={communicationType}
                        onChange={(e) => setCommunicationType(e.target.value)}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="LinkedIn Post">LinkedIn Post</option>
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="communicationDate">Date of Communication:</label>
                    <input
                        type="date"
                        id="communicationDate"
                        value={communicationDate}
                        onChange={(e) => setCommunicationDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="notes">Notes:</label>
                    <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>
                <button type="submit">Log Communication</button>
            </form>
        </div>
    );
};

export default CommunicationAction;