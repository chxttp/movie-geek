import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';
import './Login.css';
import logo from '../Images/moviegeek.png';

function Login() {
  const navigate = useNavigate();
  // const history = useHistory();

  
  const [authenticated, setAuthenticated] = useState(false);

  

  
  function handleSubmit(event) {
    let username = document.getElementById("username").value
  let password = document.getElementById("password").value
    event.preventDefault();
  
    const loginData = {
      username: username,
      password: password
    };
  
    fetch('http://192.168.10.105:8080/user/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        if (response.ok) {
          // If response is successful (status code 200-299)
          return response.json(); // Convert response to JSON
        } else {
          throw new Error('Login unsuccessful'); // Throw an error for unsuccessful response
        }
      })
      .then(data => {
        // Handle the response data
        if (data.username == loginData.username) {
          
          // Check if the response data username and password match the entered values
          console.log("api",data.username)
          console.log("com", loginData.username)
          setAuthenticated(true); // Set authenticated state to true
          // Perform any additional actions, such as storing authentication token, redirecting, etc.
        } else {
          throw new Error('Login unsuccessful'); // Throw an error if login was not successful
          
        }
      })
      .catch(error => {
        // Handle any errors that may occur during the API request
        console.error('Error during login:', error);
        
      });
  }
  

  if (authenticated == true) {
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
            <div className="username-text" >Username:</div>
            <input className="login-input" id = "username" type="text" />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Password:</div>
            <input className="login-input" id = "password" type="password"  />
          </label>
          <NavLink to="/Signup">
            Don't have an account?
          </NavLink>
          <br />
          <button className="login-button" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;