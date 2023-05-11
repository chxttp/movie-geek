import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Geeks from './components/Geeks';


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
          <Route path="/geek" element = {<Geeks/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
