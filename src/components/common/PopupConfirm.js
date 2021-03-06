import React from 'react';
import { Popconfirm, Button } from 'antd';
import { deleteAdvert } from './../../api/adverts';
import { useHistory } from 'react-router-dom';
import T from 'prop-types';

const PopupConfirm = adId => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const history = useHistory();

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    deleteAdvert(adId.adId)
      .then(() => {
        setVisible(false);
        setConfirmLoading(false);
        history.push('/adverts');
      })
      .catch(error => {
        console.log('Error deleting item: ', error);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Popconfirm
        title='Are you sure?'
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button type='link' danger onClick={showPopconfirm}>
          Delete
        </Button>
      </Popconfirm>
    </>
  );
};

PopupConfirm.propTypes = {
  adId: T.string,
};

export default PopupConfirm;
