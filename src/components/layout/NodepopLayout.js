import React, { useContext, useState } from 'react';
import { Button, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import AuthContext from './../auth/authContext';
import './NodepopLayout.css';
import FiltersForm from './../Adverts/FiltersForm';
import { defaultFilters } from './../Adverts/filters';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({ children, ...props }) => {
  const { isLogged, onLogout } = useContext(AuthContext);
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <>
      <Layout {...props}>
        <Header>
          <div>
            <Button>
              <NavLink to='/adverts'>All Ads</NavLink>
            </Button>
            <Button>
              <NavLink to='/advert/new'>New Ad</NavLink>
            </Button>
            {isLogged && <Button onClick={onLogout}>Logout</Button>}
          </div>
        </Header>
        <Content className='columns'>{children}</Content>
        <Footer>TODO: - Footer</Footer>
      </Layout>
    </>
  );
};

NodepopLayout.defaultProps = {
  isLogged: false,
};
