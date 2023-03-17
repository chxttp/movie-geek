import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Login />
    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>

    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      
    </Routes>
  </Router>
  );
}

export default App;