import React from 'react';
import './App.css';
import { NodepopLayout } from './components/layout/NodepopLayout.js';
import { logout } from './api/auth.js';
import propTypes from 'prop-types';

function App({ isAlreadyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isAlreadyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    setIsLogged(false);
    logout();
  };

  return (
    <div className='App' id='app'>
      <NodepopLayout
        isLogged={isLogged}
        onHandleLogin={handleLogin}
        onHandleLogout={handleLogout}
      />
    </div>
  );
}

App.propTypes = {
  isAlreadyLogged: propTypes.bool.isRequired,
};

export default App;
