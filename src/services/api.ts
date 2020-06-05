import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

// axios ao invés de fetch para escolher baseURL

export default api;