import interceptor from './interceptor'

const advertsBaseUrl = '/api';

export const getAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  return interceptor.get(url);
}