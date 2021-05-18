import axios from './axiosClient';

const advertsBaseUrl = '/api/v1/adverts';

export const getAdverts = () => {
  const url = `${advertsBaseUrl}`;
  return axios.get(url);
};

export const getAdvert = adId => {
  const url = `${advertsBaseUrl}/${adId}`;
  return axios.get(url);
};
