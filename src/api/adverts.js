import interceptor from './interceptor'

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  return interceptor.get(url);
}