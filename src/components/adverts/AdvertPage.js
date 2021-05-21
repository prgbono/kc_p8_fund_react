import React from 'react';
import { NodepopLayout } from '../layout/NodepopLayout';
import { getAdvert } from '../../api/adverts';
import AdvertDetail from './AdvertDetail';
import { Redirect } from 'react-router-dom';

const AdvertPage = ({ match, ...props }) => {
  const [advert, setAdvert] = React.useState([]);
  const [error, setError] = React.useState([]);
  React.useEffect(() => {
    //TODO: HOC for API calls logic
    getAdvert(match.params.adId)
      .then(setAdvert)
      .catch(error => {
        setError(error);
        console.log('Error getting advert, error: ', error);
      });
  }, [match.params.adId]);

  if (error?.statusCode === 401) {
    return <Redirect to='/login' />;
  }
  if (error?.statusCode === 404) {
    return <Redirect to='/404' />;
  }

  return <NodepopLayout>{<AdvertDetail advert={advert} />}</NodepopLayout>;
};

//TODO: PropTypes
export default AdvertPage;
