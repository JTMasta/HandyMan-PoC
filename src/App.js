import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import HandyMan from './HandyMan'
import TestComponent from './TestComponent'
import {TextButtons} from './HandyMan'

const App = () => {
  return ( 
    <Router>
     <div>
    
      <HandyMan />
      <Route path="/about"  component={TestComponent}/>
      
    </div>
  </Router>
  )
}

export default App;
