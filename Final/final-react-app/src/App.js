import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Facts from './Pages/Facts';
import Yeezy from './Pages/Yeezy';

function App() {
  return (
    <Router>
      <p>Really hoping this works no cap</p>
      <nav>
        <button>
          <Link to="/">Facts!</Link>
        </button>
        <button>
          <Link to="/Yeezy">Yeezy!</Link>
        </button>
      </nav>
      <Route path='/' exact component={Facts}></Route>
      <Route path='/Yeezy' component={Yeezy}></Route>
    </Router>
  )
}

export default App;
