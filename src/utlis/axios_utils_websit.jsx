
import axios from 'axios';
const Api_website = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',

});

Api_website.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token_user');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Api_website.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token_user');
      
    }
    return Promise.reject(error);
  }
);
export default Api_website;
