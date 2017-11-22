import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ContactForm from './contactform';
import AppBar from 'material-ui/AppBar';
import ContactList from './contactList';

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
  constructor(){
    super();
    this.state = {
      contacts: [
        {
          key: '1',
          name: 'Lora Griffin',
          email: 'lora@loragriffin.com',
          phone: '281-555-1234',
          address: '123 Main St',
          city: 'Houston',
          state: 'TX',
          zip: '77388',
        },
        {
          key: '2',
          name: 'Jane Doe',
          email: 'jane@gmail.com',
          phone: '713-555-4567',
          address: '3434 Memory Lane',
          city: 'Austin',
          state: 'TX',
          zip: '78341',
        },
        {
          key: '3',
          name: 'Danny Griffin',
          email: 'danny@gmail.com',
          phone: '713-555-4567',
          address: '123 Main St',
          city: 'Houston',
          state: 'TX',
          zip: '78341',
        }
      ]
    }
  }

  getContact(contact){
    let newContacts = this.state.contacts;
    newContacts.push(contact);
    this.setState({contacts: newContacts});
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar title="My Address Book" />
          <ContactForm callback={(contactFromForm)=>{this.getContact(contactFromForm)}}/>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
