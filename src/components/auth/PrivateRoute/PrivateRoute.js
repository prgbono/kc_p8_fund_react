import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isLogged, ...props }) => {
  console.log('PrivateRoute isLogged: ', isLogged);
  // console.log('PrivateRoute onLogout: ', onLogout);
  console.log('PrivateRoute props: ', props);

  return isLogged ? <Route {...props} /> : <Redirect to='/login' />;
};

export default PrivateRoute;
