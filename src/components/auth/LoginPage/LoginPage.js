
import React from 'react';
import LoginForm from './LoginForm';
import { login } from './../../../api/auth.js'

function LoginPage(){
  return ( 
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to NodePop</h1>
      <LoginForm onSubmit = {login}/>
    </div>
   );
}

export default LoginPage;