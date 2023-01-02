import logo from './logo.svg';
import './App.css';
import {   Switch,
  Route,
  Link, Routes,NavLink
 } from "react-router-dom";
import React from 'react';

import Home from './Home';
import Login from './Login';



function App() {
  return (
    <React.Fragment>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
        </Routes>

        <ul>
      <li>
      <Link to='/home'>home</Link>
      </li>
      <li>
      <Link to='/login'>login</Link>
      </li>

    </ul>
   </React.Fragment>
  );
}

export default App;
