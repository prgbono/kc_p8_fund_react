import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from './../authContext';

const PrivateRoute = props => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Route {...props} /> : <Redirect to='/login' />;
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateRoute;
