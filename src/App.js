import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import HandyManList from './HandyManList';
import Home from './Home';
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
          <Link to="/handymen">Handymen</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about"  component={TestComponent}/>
      <Route path="/handymen" component={HandyManList} />
      
    </div>
  </Router>
  )
}

export default App;
