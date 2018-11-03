import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import HandyMan from './HandyMan'
import TestComponent from './TestComponent'

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
      </ul>

      <hr />

      <Route exact path="/" component={HandyMan} />
      <Route path="/about"  component={TestComponent}/>
      
    </div>
  </Router>
  )
}

export default App;
