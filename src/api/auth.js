import axios, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from './axiosClient';
import storage from './../utils/storage.js';

const authUrl = '/api/auth';

export const login = async credentials => {
  const accessToken = await axios.post(`${authUrl}/login`, credentials);
  setAuthorizationHeader(accessToken);
  if (credentials.remember)
    storage.set(`${process.env.REACT_APP_TOKEN_LS}`, accessToken);
  return accessToken;
};

export const logout = () => {
  //Remove token from LS
  storage.remove(`${process.env.REACT_APP_TOKEN_LS}`);

  // Remove Authorization Bearer token as header in Axios Interceptor
  removeAuthorizationHeader();
};
