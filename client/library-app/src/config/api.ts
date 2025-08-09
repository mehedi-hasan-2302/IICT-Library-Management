// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
  },
  USERS: `${API_BASE_URL}/users`,
  CARD: `${API_BASE_URL}/card`,
  BOOK: {
    BASE: `${API_BASE_URL}/book`,
    QUERY: `${API_BASE_URL}/book/query`,
  },
  LOAN: `${API_BASE_URL}/loan`,
};

export default API_ENDPOINTS;
