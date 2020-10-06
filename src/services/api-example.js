const axios = require('axios');

// the baseURL to api.nytimes provides many alternatives inside v2/ route.
// such as [base_url]/v2/arts.json: technology & science
const api = axios.create({
  baseURL: 'https://api.bookstore.com/v1/library/',
  timeout: 5000,
  headers: {'api-key': 'AP1KEY-PROV1DED BY bookstore'}
});

export default api;
