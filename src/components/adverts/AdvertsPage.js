import React from 'react';
import { getAdverts } from '../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyAdsList from './EmptyAdsList';
import { NodepopLayout } from './../layout/NodepopLayout';

const AdvertsPage = ({ onLogout }) => {
  const [adverts, setAdverts] = React.useState([]);

  // console.log('AdvertsPage props: ', onLogout);

  React.useEffect(() => {
    //TODO: hacerlo con async-await
    getAdverts()
      .then(setAdverts)
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);

  //FIXME: Runs this twice or more times
  // console.log('AdvertsPage adverts.length: ', adverts.length);

  return (
    <NodepopLayout onHandleLogout={onLogout}>
      {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyAdsList />}
    </NodepopLayout>
  );
};

// TODO: AdvertsPage.propTypes = {}
export default AdvertsPage;
