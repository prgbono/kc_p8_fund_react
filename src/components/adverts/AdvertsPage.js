import React from 'react';
import { getAdverts } from '../../api/adverts';

const AdvertsPage = () => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    //TODO: hacerlo con async-await
    getAdverts()
      .then((ads) => {
        console.log('getAdverts useEffect, setAdverts: ', ads);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  // TODO: click en ad -> Ir al detalle
  const items = adverts.map((advert) => (
    <li key={advert.id}>{advert.content}</li>
  ));

  return (
    <div className='tweetsPage'>
      This is AdvertsPage
      <ul>{items}</ul>
    </div>
  );
};

export default AdvertsPage;
