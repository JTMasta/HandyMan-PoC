import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import HandyMan from './HandyMan'
import TestComponent from './TestComponent'
import Registration from './Registration';
import RegistrationForm from './Registration';
import CustomerRegistration from './CustomerRegistration';

const App = () => {
  return ( 
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HandyMan} />
      <Route path="/about"  component={TestComponent}/>
      <Route path="/registration" component={Registration} />
      
    </div>
  </Router>
  )
}

export default App;
