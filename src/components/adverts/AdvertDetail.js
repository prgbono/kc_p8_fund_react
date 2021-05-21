import { Card, Avatar, Button } from 'antd';
import avatar from './../../assets/images/avatar.png';
import adPlaceholder from './../../assets/images/adPlaceholder.png';
import PopupConfirm from '../common/PopupConfirm';

const AdvertDetail = ({ advert }) => {
  const { Meta } = Card;
  const { name, sale, price, tags, photo } = advert;

  return (
    <Card
      size='default'
      style={{ width: 400, display: 'inline-block' }}
      cover={
        <img
          alt={name}
          src={
            photo
              ? `${process.env.REACT_APP_API_BASE_URL}${photo}`
              : adPlaceholder
          }
        />
      }
      actions={[
        <Button type='text'>{`${price}€`}</Button>,
        <Button type='text'>{sale ? 'Sell' : 'Buy'}</Button>,
        <PopupConfirm adId={advert.id}></PopupConfirm>,
      ]}
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={tags?.join(', ')}
      />
    </Card>
  );
};
//TODO: AdvertDetail.propTypes

export default AdvertDetail;
