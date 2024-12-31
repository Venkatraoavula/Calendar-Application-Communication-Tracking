import React, { useState, useEffect } from 'react';
import { addCompany, editCompany, deleteCompany, fetchCompanies } from '../../services/api';

const CompanyManagement = () => {
    const [companies, setCompanies] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        location: '',
        linkedInProfile: '',
        emails: '',
        phoneNumbers: '',
        comments: '',
        communicationPeriodicity: '2 weeks',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        loadCompanies();
    }, []);

    const loadCompanies = async () => {
        const data = await fetchCompanies();
        setCompanies(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await editCompany(formData);
        } else {
            await addCompany(formData);
        }
        resetForm();
        loadCompanies();
    };

    const resetForm = () => {
        setFormData({
            id: '',
            name: '',
            location: '',
            linkedInProfile: '',
            emails: '',
            phoneNumbers: '',
            comments: '',
            communicationPeriodicity: '2 weeks',
        });
        setIsEditing(false);
    };

    const handleEdit = (company) => {
        setFormData(company);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        await deleteCompany(id);
        loadCompanies();
    };

    return (
        <div>
            <h2>Company Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id} />
                <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                <input type="url" name="linkedInProfile" placeholder="LinkedIn Profile" value={formData.linkedInProfile} onChange={handleChange} />
                <input type="text" name="emails" placeholder="Emails" value={formData.emails} onChange={handleChange} />
                <input type="text" name="phoneNumbers" placeholder="Phone Numbers" value={formData.phoneNumbers} onChange={handleChange} />
                <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange}></textarea>
                <select name="communicationPeriodicity" value={formData.communicationPeriodicity} onChange={handleChange}>
                    <option value="2 weeks">Every 2 weeks</option>
                    <option value="1 month">Every month</option>
                    <option value="1 week">Every week</option>
                </select>
                <button type="submit">{isEditing ? 'Update Company' : 'Add Company'}</button>
                <button type="button" onClick={resetForm}>Cancel</button>
            </form>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name} - {company.location}
                        <button onClick={() => handleEdit(company)}>Edit</button>
                        <button onClick={() => handleDelete(company.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyManagement;