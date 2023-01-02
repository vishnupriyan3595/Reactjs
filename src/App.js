import logo from './logo.svg';
import './App.css';
import {   Switch,
  Route,
  Link, Routes,NavLink
 } from "react-router-dom";
import React from 'react';

import Home from './Home';
import Login from './Login';
import AboutUs from './AboutUs';
import Contact from './Contact';


function App() {
  return (
    <React.Fragment>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Contact" element={<Contact />} />
        </Routes>

        <ul>
      <li>
      <Link to='/home'>home</Link>
      </li>
      <li>
      <Link to='/login'>login</Link>
      </li>
      <li>
      <Link to='/AboutUs'>AboutUs</Link>
      </li>
      <li>
      <Link to='/Contact'>Contact</Link>
      </li>

    </ul>
   </React.Fragment>
  );
}

export default App;
