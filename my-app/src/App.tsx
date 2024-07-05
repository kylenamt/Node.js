import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className ="Login-Box">
          <div className = 'Login-logo'>
            <area shape='rect' alt = '?' id = 'decoration-rectangle' ></area>
            <h1 className = 'Login-title'> CRUD OPERATION</h1>
          </div>
          <h1 className = 'Sign-In'> SIGN IN</h1>
          <h2 className = 'Sign-in-msg'> Enter your credentials to access your account</h2>
          <div className = 'Email-Input'> 
            <label >First name</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <div className = 'Password-Input'> 
            <label >Password</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <button> Sign-in</button>
          <div> 
            <label> Forgot your password?</label>
            <u>Reset Password</u>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
