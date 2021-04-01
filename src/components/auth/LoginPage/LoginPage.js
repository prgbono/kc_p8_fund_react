
import React from 'react';
import LoginForm from './LoginForm'

function LoginPage(){
  return ( 
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to NodePop</h1>
      <LoginForm />
    </div>
   );
}

export default LoginPage;