import React from 'react';
import { getAdverts } from '../../api/adverts';
import { Card } from 'antd';

const AdvertsPage = () => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    //TODO: hacerlo con async-await
    getAdverts()
      .then(setAdverts)
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  // TODO: click en ad -> Ir al detalle
  const { Meta } = Card;
  const ads = adverts.map((advert) => (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }
    >
      <Meta title={advert.name} description={advert.price} />
    </Card>
  ));

  return ads;
};

export default AdvertsPage;
