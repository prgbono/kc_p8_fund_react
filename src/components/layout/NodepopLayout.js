import React from 'react';
import { Button, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AdvertsPage from '../Adverts/AdvertsPage.js';
import { LoginPage } from './../../components/auth/LoginPage/index.js';
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
          <Button icon={<SearchOutlined />}>Search</Button>
          {isLogged && (
            <Button type='primary' onClick={onHandleLogout}>
              Logout
            </Button>
          )}
        </Header>
        <Content>
          {isLogged ? <AdvertsPage /> : <LoginPage onLogin={onHandleLogin} />}
        </Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};

NodepopLayout.propTypes = {
  onHandleLogin: PropTypes.func.isRequired,
  onHandleLogout: PropTypes.func.isRequired,
};

NodepopLayout.defaultProps = {
  isLogged: false,
};
