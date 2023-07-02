import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
