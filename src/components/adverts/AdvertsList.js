import { Card } from 'antd';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { advertType } from './AdvertDetail';

const AdvertsList = ({ adverts, ...props }) => {
  const { Meta } = Card;
  const ads = adverts.map(({ id, price, sale, tags, name, ...advert }) => (
    <Link to={`/adverts/${id}`} key={id}>
      <Card
        size='small'
        hoverable
        style={{ width: 240 }}
        actions={[`${price}€`, sale ? 'Sell' : 'Buy']}
      >
        <Meta title={name} description={tags} />
      </Card>
    </Link>
  ));
  return ads;
};

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape(advertType)),
};

export default AdvertsList;
