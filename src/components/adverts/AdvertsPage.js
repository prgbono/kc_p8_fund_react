import React from 'react';
import { getAdverts } from '../../api/adverts';
import { Card } from 'antd';
import EmptyAdsList from './EmptyAdsList';
import { Link } from 'react-router-dom';

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

  console.log('AdvertsPage component');

  if (adverts.length === 0) return <EmptyAdsList />;

  // TODO: click en ad -> Ir al detalle
  // <Link to={`/adverts/:${advert.id}`}>// </Link>
  const { Meta } = Card;
  const ads = adverts.map(advert => (
    <Card
      size='small'
      hoverable
      style={{ width: 240 }}
      actions={[`${advert.price}€`, advert.sale ? 'Sell' : 'Buy']}
    >
      <Meta title={advert.name} description={advert.tags} />
    </Card>
  ));
  return ads;
};

export default AdvertsPage;
