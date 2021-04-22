import axios from './axiosClient';

const authUrl = '/api/auth';

export const login = (credentials) => {
  return axios.post(`${authUrl}/login`, credentials)
}
