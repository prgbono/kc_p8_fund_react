import React from 'react';
import LoginForm from './LoginForm';
import { login } from './../../../api/auth.js';

function LoginPage({ onLogin }) {
  const handleSubmit = async (credentials) => {
    //TODO: Configure try-catch on Axios client
    try {
      await login(credentials);
      onLogin(); //set user logged in App.js state
    } catch (error) {
      console.log('error: ', error);
    } finally {
      // console.log(`Finally del try-catch del login`);
    }
  };

  return (
    <div className='loginPage'>
      <h1 className='loginPage-title'>Log in to NodePop</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
