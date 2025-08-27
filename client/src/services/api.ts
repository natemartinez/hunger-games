import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-api.com' 
  : 'http://localhost:5000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  healthCheck: async () => {
    const response = await api.get('/api/health');
    return response.data;
  },

  getGames: async () => {
    const response = await api.get('/api/games');
    return response.data;
  },

  getTributes: async () => {
    const response = await api.get('/api/tributes');
    return response.data;
  },
};

export default api;
