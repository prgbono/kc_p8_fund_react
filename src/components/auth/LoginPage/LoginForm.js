import React from "react";
import FormField from "./../../shared/FormField.js";
import Button from "./../../shared/Button.js";
import "./LoginForm.css";

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleCredentialsChange = (ev) => {
    // Return new credentials as an arrow function if new state depends on old one
    setCredentials((oldCredentials) => {
      const newCredentials = {
        ...oldCredentials,
        [ev.target.name]: ev.target.value, //[ev.target.name] === ['email'] or ['password'] new ECMAScript6
      };
      return newCredentials;
    });
  };

  //Destructuring. Let us disable Login button if not populated any of the inputs
  const { email, password } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await onSubmit(credentials);
      //TODO: save token in Storage
    } catch (error) {
      console.log("error: ", error);
    } finally {
      console.log(`Finally del try-catch del login`);
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="email"
        label="Email"
        className="loginForm-field"
        value={email} //tied with component state
        onChange={handleCredentialsChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password} //tied with component state
        onChange={handleCredentialsChange}
      />
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={!email || !password}
      >
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
