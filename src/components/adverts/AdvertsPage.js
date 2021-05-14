import React from 'react';
import { getAdverts } from '../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyAdsList from './EmptyAdsList';

const AdvertsPage = () => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    //TODO: hacerlo con async-await
    getAdverts()
      .then(setAdverts)
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);

  return adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyAdsList />;
};

// TODO: AdvertsPage.propTypes = {}
export default AdvertsPage;
