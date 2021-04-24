import axios from './axiosClient';

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  return axios.get(url);
};
