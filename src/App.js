import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './Navbar'
import TestComponent from './TestComponent'
import Registration from './Registration';
import RegistrationForm from './Registration';
import CustomerRegistration from './CustomerRegistration';
import { TextButtons } from './Navbar'
import HandyManList from './HandyManList';
import Home from './Home';
import JobPosting from './JobPosting'
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4e3b6d',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#000000',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});


const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <link rel="stylesheet" type="text/css" href="/HandyManStyles.css" />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={TestComponent} />
          <Route path="/jobPosting" component={JobPosting} />
          <Route path="/handymen" component={HandyManList} />
          <Route path="/registration" component={RegistrationForm} />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App;
