import React from 'react';
import FormField from './../../shared/FormField.js'
import Button  from './../../shared/Button.js'
import './LoginForm.css';

function LoginForm() {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  const handleCredentialsChange = ev => {
    const newCredentials = {
      ...credentials, 
      [ev.target.name]: ev.target.value, //[ev.target.name] === ['username'] or ['password'] new ECMAScript6
    };
    setCredentials(newCredentials);
  }

  return (
    <form className="loginForm">
      <FormField
        type="text"
        name="username"
        label="Username"
        className="loginForm-field"
        value= {credentials.username} //tied with component state
        onChange= {handleCredentialsChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value= {credentials.password} //tied with component state
        onChange= {handleCredentialsChange}
      />
      <Button type="submit" className="loginForm-submit" variant="primary">
        Log in
      </Button>
    </form>
  )
};

export default LoginForm;

