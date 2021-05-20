import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isLogged, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to='/login' />;
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateRoute;
