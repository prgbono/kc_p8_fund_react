import React from 'react';
import './App.css';
import { logout } from './api/auth.js';
import propTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { AdvertsPage, AdvertDetailPage } from './components/Adverts';
import { LoginPage } from './components/auth/LoginPage';
import NotFoundPage from './components/common/NotFound';

function App({ isAlreadyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isAlreadyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    setIsLogged(false);
    logout();
  };

  return (
    <div className='App' id='app'>
      <Switch>
        <Route path='/adverts/:adId'>
          <AdvertDetailPage />
        </Route>
        <Route path='/adverts' component={AdvertsPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/404'>
          <NotFoundPage />
        </Route>
        <Route exact path='/'>
          <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />
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
