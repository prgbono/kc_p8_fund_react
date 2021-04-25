import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response.data,
    });
  },
);

export const setAuthorizationHeader = (token) => {
  //FIXME: Prettier - Avoid new line when opening array-brackets
  const { accessToken } = token;
  axiosClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${accessToken}`;
};

export default axiosClient;
