import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './../authContext';

const PrivateRoute = props => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Route {...props} /> : <Redirect to='/login' />;
};

export default PrivateRoute;
