import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';
import './Login.css';
import logo from '/Users/chattp/Desktop/TeamProject/movie-geek/src/Images/moviegeek.png'

function Signup() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setAuthenticated(true);
  }

  if (authenticated) {
    // history.push("/home"); 
    navigate('/home')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div>
          <img src={logo}/>
        </div>
        <h1 className="login-heading">Welcome to MovieGeek</h1>
        <form onSubmit={handleSubmit}>
          <label className="login-label">
            <div className="username-text">Username:</div>
            <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Create Password:</div>
            <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Confirm Password:</div>
            <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className="login-button" type="submit">Create an account</button>
          <NavLink to="/login">
            Already have an account?
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signup;