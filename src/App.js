import React from 'react';
import './App.css';
import { logout } from './api/auth.js';
import propTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { AdvertsPage, AdvertDetailPage } from './components/Adverts';
import { LoginPage } from './components/auth/LoginPage';
import NotFoundPage from './components/common/NotFound';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';

function App({ isAlreadyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isAlreadyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    logout();
  };

  return (
    <div className='App' id='app'>
      <Switch>
        <PrivateRoute isLogged={isLogged} path='/adverts/:adId'>
          <AdvertDetailPage />
        </PrivateRoute>

        <PrivateRoute path='/adverts'>
          {() => <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />}
        </PrivateRoute>

        <Route path='/login'>
          {() =>
            isLogged ? (
              <Redirect to='/' />
            ) : (
              <LoginPage onLogin={handleLogin} onLogout={handleLogout} />
            )
          }
        </Route>

        <PrivateRoute isLogged={isLogged} exact path='/'>
          {() =>
            isLogged ? (
              <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />
            ) : (
              <LoginPage onLogin={handleLogin} onLogout={handleLogout} />
            )
          }
        </PrivateRoute>

        {/* <Route path='/advert/new'></Route> */}
        {/* <PrivateRoute isLogged={isLogged} path='/advert/new'></PrivateRoute> */}

        <Route path='/404'>
          <NotFoundPage />
        </Route>
        <Route>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  isAlreadyLogged: propTypes.bool.isRequired,
};

export default App;
