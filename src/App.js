import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './Navbar'
import TestComponent from './TestComponent'
import {TextButtons} from './Navbar'

const App = () => {
  return ( 
    <Router>
     <div>
    
      <Navbar />
      <Route path="/about"  component={TestComponent}/>
      
    </div>
  </Router>
  )
}

export default App;
