import axios from 'axios';

const axiosClient = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

axiosClient.interceptors.response.use(response => response.data);

export default axiosClient;