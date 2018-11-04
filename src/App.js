import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './Navbar'
import TestComponent from './TestComponent'
import Registration from './Registration';
import RegistrationForm from './Registration';
import CustomerRegistration from './CustomerRegistration';
import {TextButtons} from './Navbar'
import HandyManList from './HandyManList';
import Home from './Home';
import JobPosting from './JobPosting'

const App = () => {
  return ( 
    <Router> 
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about"  component={TestComponent}/>
      <Route path="/jobPosting" component={JobPosting}/>
      <Route path="/handymen" component={HandyManList} />
      
    </div>
  </Router>
  )
}

export default App;
