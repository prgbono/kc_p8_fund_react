import React from 'react';
import { Button, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({
  children,
  isLogged,
  onHandleLogin,
  onHandleLogout,
  ...props
}) => {
  return (
    <>
      <Layout {...props}>
        <Header>
          <Button>
            <Link to='/adverts'>All Ads</Link>
          </Button>
          <Button>
            <Link to='/advert/new'>New Ad</Link>
          </Button>
          <Button icon={<SearchOutlined />}>Search</Button>
          {isLogged && <Button onClick={onHandleLogout}>Logout</Button>}
        </Header>
        <Content>{children}</Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};

//FIXME:
// NodepopLayout.propTypes = {
//   onHandleLogin: PropTypes.func.isRequired,
//   onHandleLogout: PropTypes.func.isRequired,
// };

NodepopLayout.defaultProps = {
  isLogged: false,
};
