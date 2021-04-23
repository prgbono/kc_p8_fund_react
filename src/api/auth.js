import axios, { setAuthorizationHeader } from './axiosClient';
import storage from './../utils/storage.js';

const authUrl = '/api/auth';

export const login = async (credentials) => {
  const accessToken = await axios.post(`${authUrl}/login`, credentials);
  storage.set(`${process.env.REACT_APP_TOKEN_LS}`, accessToken);
  setAuthorizationHeader(accessToken);
  return accessToken;
};
