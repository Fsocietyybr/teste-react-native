import axios from 'axios';

const api = axios.create({
  // ny times access to api
  baseURL: 'https://api.github.com',
});

export default api;
