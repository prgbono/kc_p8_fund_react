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
    // Return new credentials as an arrow function if new state depends on old one
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [ev.target.name]: ev.target.value, //[ev.target.name] === ['username'] or ['password'] new ECMAScript6  
      };
      return newCredentials;
    })
  }

  //Destructuring. Let us disable Login button if not populated any of the inputs
  const {username, password} = credentials;

  return (
    <form className="loginForm">
      <FormField
        type="text"
        name="username"
        label="Username"
        className="loginForm-field"
        value= {username} //tied with component state
        onChange= {handleCredentialsChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value= {password} //tied with component state
        onChange= {handleCredentialsChange}
      />
      <Button type="submit" className="loginForm-submit" variant="primary" disabled={!username || !password}>
        Log in
      </Button>
    </form>
  )
};

export default LoginForm;

