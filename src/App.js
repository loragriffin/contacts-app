import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ContactForm from './contactform';
import AppBar from 'material-ui/AppBar';

// Customizes Material UI Theme
// Can adjust other elements here as well (i.e. AppBar height, etc.)
const theme = getMuiTheme({
  palette: {
    primary1Color: '#009688',
    accent1Color: '#9E9E9E'
  }
});

// Structure of main page
class App extends Component {
  render() {
    return (

      <MuiThemeProvider muiTheme={theme}>

        <AppBar title="My Address Book" />
        <ContactForm/>

      </MuiThemeProvider>

    );
  }
}

export default App;
