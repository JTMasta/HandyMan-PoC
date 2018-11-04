import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './Navbar'
import TestComponent from './TestComponent'
import {TextButtons} from './Navbar'
import HandyManList from './HandyManList';
import Home from './Home';
import TestComponent from './TestComponent'
import JobPosting from './JobPosting'

const App = () => {
  return ( 
    <Router>
     <div>
    
      <Navbar />
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
        <li>
          <Link to="/jobPosting">Job Postings</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about"  component={TestComponent}/>
      <Route path="/jobPosting" component={JobPosting}/>
      <Route path="/handymen" component={HandyManList} />
      
    </div>
  </Router>
  )
}

export default App;
