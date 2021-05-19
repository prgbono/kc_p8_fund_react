import React from 'react';
import LoginForm from './LoginForm';
import { login } from './../../../api/auth.js';
import PropTypes from 'prop-types';
import { NodepopLayout } from './../../layout/NodepopLayout';

function LoginPage({ onLogin, onLogout, ...props }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
  // Avoid React error: can’t perform a react state update on an unmounted component with useEffect and useRef
  React.useEffect(() => {
    if (isLogged.current) {
      onLogin(); //set user logged as true in App.js state. Function handleLogin
    }
    //FIXME:
    //}, [isLogged.current, onLogin]);
  }, [isLogged.current]);

  const handleSubmit = async credentials => {
    //TODO: Configure try-catch on Axios client
    try {
      setIsLoading(true);
      await login(credentials);
      isLogged.current = true;
    } catch (error) {
      //TODO: if 401-Unauthorized send the user a more understable message, 'Invalid Credentials'
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NodepopLayout {...props}>
      <div>
        <h1>Log in to NodePop</h1>
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && <div>{error.message}</div>}
      </div>
    </NodepopLayout>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
