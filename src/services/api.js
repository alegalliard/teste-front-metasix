import axios from 'axios';

const api = axios.create({
    baseURL: 'https://poc.metasix.solutions',
});

export default api;
