import React, { useContext } from 'react';
import { Button, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import AuthContext from './../auth/authContext';
import './NodepopLayout.css';
import Filters from './../common/Filters';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({ children, ...props }) => {
  const { isLogged, onLogout } = useContext(AuthContext);
  return (
    <>
      <Layout {...props}>
        <Header>
          <div class='navBar'>
            <div>
              <Button>
                <NavLink to='/adverts'>All Ads</NavLink>
              </Button>
              <Button>
                <NavLink to='/advert/new'>New Ad</NavLink>
              </Button>
              {isLogged && <Button onClick={onLogout}>Logout</Button>}
            </div>
            <div>
              <Filters></Filters>
            </div>
          </div>
        </Header>
        <Content class='columns'>{children}</Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};

NodepopLayout.defaultProps = {
  isLogged: false,
};
