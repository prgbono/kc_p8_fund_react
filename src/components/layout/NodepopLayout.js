import React, { useContext } from 'react';
import { Button, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AuthContext from './../auth/authContext';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({ children, ...props }) => {
  const { isLogged, onLogout } = useContext(AuthContext);
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
          {isLogged && <Button onClick={onLogout}>Logout</Button>}
        </Header>
        <Content>{children}</Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};

NodepopLayout.defaultProps = {
  isLogged: false,
};
