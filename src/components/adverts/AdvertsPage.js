import React from 'react';
import { getAdverts } from '../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyAdsList from './EmptyAdsList';
import { NodepopLayout } from './../layout/NodepopLayout';

const AdvertsPage = ({ onLogout, ...props }) => {
  
  const [adverts, setAdverts] = React.useState([]);
  React.useEffect(() => {
    //TODO: hacerlo con async-await
    getAdverts()
      .then(setAdverts)
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <NodepopLayout onHandleLogout={onLogout} {...props}>
      {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyAdsList />}
    </NodepopLayout>
  );
};

// TODO: AdvertsPage.propTypes = {}
export default AdvertsPage;
