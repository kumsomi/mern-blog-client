import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
export const Login = () => {
  const loginHandler = () => {};
  return (
    <div className="login-page">
      <form onSubmit={loginHandler} className="form-container">
        <h1>User Login</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="email"
          className="form-inputs"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="password"
          className="form-inputs"
        />
        <input type="submit" value="Login" className="form-inputs" />
        <Link to="/signup">Create a new account</Link>
      </form>
    </div>
  );
};
