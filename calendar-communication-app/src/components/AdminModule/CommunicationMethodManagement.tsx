import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
    const [methods, setMethods] = useState([
        { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
        { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: false },
        { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
        { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
        { name: 'Other', description: 'Any other method', sequence: 5, mandatory: false },
    ]);

    const addMethod = (newMethod) => {
        setMethods([...methods, newMethod]);
    };

    const updateMethod = (index, updatedMethod) => {
        const updatedMethods = methods.map((method, i) => (i === index ? updatedMethod : method));
        setMethods(updatedMethods);
    };

    const deleteMethod = (index) => {
        const updatedMethods = methods.filter((_, i) => i !== index);
        setMethods(updatedMethods);
    };

    return (
        <div>
            <h2>Communication Method Management</h2>
            <ul>
                {methods.map((method, index) => (
                    <li key={index}>
                        <strong>{method.name}</strong>: {method.description} (Sequence: {method.sequence}, Mandatory: {method.mandatory ? 'Yes' : 'No'})
                        <button onClick={() => updateMethod(index, { ...method, mandatory: !method.mandatory })}>
                            Toggle Mandatory
                        </button>
                        <button onClick={() => deleteMethod(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            {/* Add method form can be implemented here */}
        </div>
    );
};

export default CommunicationMethodManagement;