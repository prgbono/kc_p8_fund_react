import React from 'react';
import { Button, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AdvertsPage from './../../components/adverts/AdvertsPage.js';
import { LoginPage } from './../../components/auth/LoginPage/index.js';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({
  children,
  isLogged,
  onHandleLogin,
  onHandleLogout,
  ...props
}) => {
  console.log(`isLogged value: ${isLogged}`);

  return (
    <>
      <Layout {...props}>
        <Header>
          <Button icon={<SearchOutlined />}>Search</Button>
          {/* <Button type='primary'>Sign Up</Button> */}
          <Button type='primary' onClick={onHandleLogout}>
            {isLogged ? 'Logout' : 'Login'}
          </Button>
        </Header>
        <Content>
          {isLogged ? <AdvertsPage /> : <LoginPage onLogin={onHandleLogin} />}
        </Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};
