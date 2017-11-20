import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ContactForm from './contactform';
import AppBar from 'material-ui/AppBar';


const theme = getMuiTheme({
  palette: {
    primary1Color: '#009688',
    accent1Color: '#9E9E9E'
  }
});

class App extends Component {
  render() {
    return (

      <MuiThemeProvider muiTheme={theme}>

        <AppBar title="My Contacts" />
        <ContactForm/>

      </MuiThemeProvider>

    );
  }
}

export default App;
