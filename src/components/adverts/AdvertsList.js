import { Card } from 'antd';
import { Link } from 'react-router-dom';

const AdvertsList = ({ adverts }) => {
  console.log('This is AdvertsListComponent, and the adverts: ', adverts);

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

// TODO: AdvertsList.propTypes = {}

export default AdvertsList;
