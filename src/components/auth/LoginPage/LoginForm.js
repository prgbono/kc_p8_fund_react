import React from 'react';
import FormField from './../../shared/FormField.js';
import Button from './../../shared/Button.js';
import './LoginForm.css';
import PropTypes from 'prop-types';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleCredentialsChange = event => {
    // Return new credentials as an arrow function if new state depends on old one
    setCredentials(oldCredentials => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      let newCredentials = {
        ...oldCredentials,
        [name]: value,
      };
      return newCredentials;
    });
  };

  //Destructuring. Let us disable Login button if not populated any of the inputs
  const { email, password, remember } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();
    onSubmit(credentials); //este onSubmit es la func handleSubmit de LoginPage
  };

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <FormField
        type='text'
        name='email'
        label='Email'
        className='loginForm-field'
        value={email} //tied with component state
        onChange={handleCredentialsChange}
      />
      <FormField
        type='password'
        name='password'
        label='password'
        className='loginForm-field'
        value={password} //tied with component state
        onChange={handleCredentialsChange}
      />
      <label>
        Remember me
        <input
          name='remember'
          type='checkbox'
          checked={remember}
          onChange={handleCredentialsChange}
        />
      </label>
      <Button
        type='submit'
        className='loginForm-submit'
        variant='primary'
        disabled={isLoading || !email || !password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
