import axios from 'axios';

const interceptor = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

interceptor.interceptors.response.use(response => response.data);

export default interceptor;