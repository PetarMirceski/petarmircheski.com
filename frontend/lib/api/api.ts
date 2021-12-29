import axios from 'axios';
import { config } from 'constants/config';

const axiosConfig = {
  baseURL: config.apiUrl,
  timeout: 1000,
};

export const apiInstance = axios.create(axiosConfig);
