import React from 'react';
import './App.css';
import { NodepopLayout } from './components/layout/NodepopLayout.js';
import { logout } from './api/auth.js';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

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

export default App;
