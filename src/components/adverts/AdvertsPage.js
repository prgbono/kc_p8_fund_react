import React from 'react';
import { getAdverts } from '../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyAdsList from './EmptyAdsList';
import { NodepopLayout } from './../layout/NodepopLayout';

const AdvertsPage = props => {
  const [adverts, setAdverts] = React.useState([]);
  React.useEffect(() => {
    getAdverts()
      .then(setAdverts)
      .catch(error => {
        console.log('Error getting adverts: ', error);
        // TODO: Handle the 'Unauthorised error. Now when says there is no Ads when happens
      });
  }, []);

  return (
    <NodepopLayout {...props}>
      {adverts.length ? (
        <AdvertsList adverts={adverts} {...props} />
      ) : (
        <EmptyAdsList />
      )}
    </NodepopLayout>
  );
};

// TODO: AdvertsPage.propTypes = {}
export default AdvertsPage;
