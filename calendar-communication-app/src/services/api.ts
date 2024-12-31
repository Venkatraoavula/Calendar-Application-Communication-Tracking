import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

// Function to get all companies
export const getCompanies = async () => {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
};

// Function to add a new company
export const addCompany = async (companyData) => {
    const response = await axios.post(`${API_BASE_URL}/companies`, companyData);
    return response.data;
};

// Function to update an existing company
export const updateCompany = async (companyId, companyData) => {
    const response = await axios.put(`${API_BASE_URL}/companies/${companyId}`, companyData);
    return response.data;
};

// Function to delete a company
export const deleteCompany = async (companyId) => {
    const response = await axios.delete(`${API_BASE_URL}/companies/${companyId}`);
    return response.data;
};

// Function to log a communication
export const logCommunication = async (communicationData) => {
    const response = await axios.post(`${API_BASE_URL}/communications`, communicationData);
    return response.data;
};

// Function to get communications for a specific company
export const getCommunicationsByCompany = async (companyId) => {
    const response = await axios.get(`${API_BASE_URL}/companies/${companyId}/communications`);
    return response.data;
};

// Function to get reports (optional)
export const getReports = async () => {
    const response = await axios.get(`${API_BASE_URL}/reports`);
    return response.data;
};