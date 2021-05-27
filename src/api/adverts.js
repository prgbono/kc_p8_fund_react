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

export const deleteAdvert = adId => {
  const url = `${advertsBaseUrl}/${adId}`;
  return axios.delete(url);
};

export const getTags = () => {
  const url = `${advertsBaseUrl}/tags`;
  return axios.get(url);
};

export const createAdvert = advert => {
  const url = `${advertsBaseUrl}`;
  return axios.post(url, advert);
};
