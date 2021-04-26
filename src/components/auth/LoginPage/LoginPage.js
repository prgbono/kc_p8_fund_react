import React from 'react';
import LoginForm from './LoginForm';
import { login } from './../../../api/auth.js';
import PropTypes from 'prop-types';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (credentials) => {
    //TODO: Configure try-catch on Axios client
    try {
      setIsLoading(true);
      await login(credentials);
      onLogin(); //set user logged in App.js state
    } catch (error) {
      //TODO: if 401-Unauthorized send the user a more understable message, 'Invalid Credentials'
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Log in to NodePop</h1>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {error && <div>{error.message}</div>}
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
