import React from "react";
import LoginForm from "./LoginForm";
import { login } from "./../../../api/auth.js";
import storage from "./../../../utils/storage.js";

function LoginPage({ onLogin }) {
  const handleSubmit = async (credentials) => {
    try {
      const accessToken = await login(credentials);
      onLogin(); //set user logged in App.js state
      storage.set(`${process.env.REACT_APP_TOKEN_LS}`, accessToken);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      console.log(`Finally del try-catch del login`);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to NodePop</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
