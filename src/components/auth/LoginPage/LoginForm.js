import React from 'react';
import FormField from './../../shared/FormField.js'
import Button  from './../../shared/Button.js'

import './LoginForm.css';

function LoginForm() {
  return (
    //TODO: Apply styled-components instead of css files
    <form className="loginForm">
      <FormField
        type="text"
        name="email"
        label="phone, email or username"
        className="loginForm-field"
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
      />
      <Button type="submit" className="loginForm-submit" variant="primary">
        Log in
      </Button>
    </form>
  )
};

export default LoginForm;

