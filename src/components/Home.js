import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'
import './Home.css'
import MovieList from './MovieList';
import PopularList from './PopularList';

function Home() {
  
  return (
    <div className='Home'>
      <Navbar />
      <MovieList listType='new'/>
      <MovieList listType='popular'/>
      <MovieList listType ='oscar'/>
      <PopularList/>

    </div>
    
  );
}

export default Home;
