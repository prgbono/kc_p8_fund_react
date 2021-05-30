import React from 'react';
import './App.css';
import { logout } from './api/auth.js';
import propTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { AdvertsPage, AdvertPage } from './components/Adverts';
import { LoginPage } from './components/auth/LoginPage';
import NotFoundPage from './components/common/NotFound';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';
import NewAdvertPage from './components/NewAdvert/NewAdvertPage';
import { AuthContextProvider } from './components/auth/authContext';

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
      <AuthContextProvider
        value={{ isLogged, onlogout: handleLogout, onLogin: handleLogin }}
      >
        <Switch>
          <PrivateRoute path='/adverts/:adId'>
            {routeParams => <AdvertPage {...routeParams} />}
          </PrivateRoute>
          <PrivateRoute path='/adverts'>
            {() => <AdvertsPage onLogout={handleLogout} />}
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
          <PrivateRoute exact path='/'>
            {() =>
              isLogged ? (
                <AdvertsPage onLogout={handleLogout} />
              ) : (
                <LoginPage onLogin={handleLogin} onLogout={handleLogout} />
              )
            }
          </PrivateRoute>
          <PrivateRoute path='/advert/new'>
            <NewAdvertPage></NewAdvertPage>
          </PrivateRoute>
          <Route path='/404'>
            <NotFoundPage />
          </Route>
          <Route>
            <Redirect to='/404' />
          </Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isAlreadyLogged: propTypes.bool.isRequired,
};

export default App;
