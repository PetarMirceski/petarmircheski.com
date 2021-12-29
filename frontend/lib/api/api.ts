import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://0.0.0.0:1337/api',
  timeout: 1000,
};
export const apiInstance = axios.create(axiosConfig);
