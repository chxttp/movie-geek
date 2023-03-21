import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';


function App() {
  
  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/MovieDetail" element = {<MovieDetail/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
