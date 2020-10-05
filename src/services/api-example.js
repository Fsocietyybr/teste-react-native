const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.bookstore.com/v1/library/',
  timeout: 5000,
  headers: {'api-key': 'AP1KEY-PROV1DED BY bookstore'}
});

export default api;
