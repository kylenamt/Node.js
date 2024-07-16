import React from "react";
// import "./Singin.scss";
// import "./App.css";

function Signin() {
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in form">
        <div className="title-container">
          <h1 className="sign-in title">CRUD OPERATIONS</h1>
          <h1 className="sign-in msg _1">SIGN IN</h1>
          <h2 className="sign-in msg _2">
            Enter your credentials to access your account
          </h2>
        </div>
        <div className="sign-in input _1">
          <label>Email</label>
          <input
            className="textfield"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="sign-in input _2">
          <label>Password</label>
          <input
            className="textfield"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <button className="sign-in button">SIGN IN</button>
        <div className="sign-in reset-password">
          <label> Forgot your password?</label>
          <a href="https://github.com/" className="reset-redirect">
            Reset Password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
