import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header/>
        <Route exact path = '/' component={Home}></Route>
        <Route path = '/about/' component={About}></Route>
        <Route path = '/topics/' component={Topics}></Route>
      </div>
    </Router>
  );
}

const Header = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-ul">
        <li className="nav-bar-li"><Link to='/' className="nav-bar-link">Home</Link></li>
        <li className="nav-bar-li"><Link to='/about' className="nav-bar-link">About</Link></li>
        <li className="nav-bar-li"><Link to='/topics' className="nav-bar-link">Topics</Link></li>
      </ul>
    </div>
  );
}

const Home = () => {
  return (
    <div className="content">
      <p>This is home page</p>
    </div>
  );
}

const About = () => {
  return (
    <div className="content">
      <p>This is About page</p>
    </div>
  );
}

const Topics = () => {
  return (
    <div className="content">
      <p>This is topics page</p>
    </div>
  );
}



export default App;