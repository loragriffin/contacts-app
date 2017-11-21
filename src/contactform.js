import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';

import uid from 'uid';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
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

// Recognizes changes being made to field (i.e. as you're typing)
  update_state(event, key) {
    // console.log(event.target);
    this.setState({
      [key]: event.target.value
    });
  }

// Prevents auto reload of page
  handle_submit(event) {
    console.log('Submitted: ', this.state);

    // create a unique ID for each contact using 'uid'
    // npm install uid -save
    let contact = {
      key: uid(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };

    //you cannot change the state directly so you must create a temporary array into which you can push contact
    let tempArray = this.state.contacts;
    tempArray.push(contact);
    //reset the text fields to empty when the submit button is pushed.
    this.setState({
      contacts: tempArray,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    });

    event.preventDefault();
  }

  render() {

    this.state.contacts.sort(function (a, b) {
      return a.name > b.name;
    });

    let renderList = this.state.contacts.map((c)=>{
      return (
        <li key={c.key}>{c.name}: {c.city}, {c.state}</li>
      )
    });

    return (
      <div>
        <Card>
        <form onSubmit={event => this.handle_submit(event)}>
          <CardTitle title="Add Contact" subtitle="Add a new contact to your address book." />
          <CardText>
            <TextField floatingLabelText="Contact Name"
              value={this.state.name}
              onChange={event => this.update_state(event, 'name')} />
            <br />
            <TextField floatingLabelText="E-mail"
              value={this.state.email}
              onChange={event => this.update_state(event, 'email')} />
            <TextField floatingLabelText="Phone Number"
              value={this.state.phone}
              onChange={event => this.update_state(event, 'phone')} />
              <br />
            <TextField floatingLabelText="Address"
              value={this.state.address}
              onChange={event => this.update_state(event, 'address')} />
            <TextField floatingLabelText="City"
              value={this.state.city}
              onChange={event => this.update_state(event, 'city')} />
              <br />
            <TextField floatingLabelText="State"
              value={this.state.state}
              onChange={event => this.update_state(event, 'state')} />
            <TextField floatingLabelText="Zip Code"
              value={this.state.zip}
              onChange={event => this.update_state(event, 'zip')} />
            <br />
          </CardText>
          <CardActions>
            <RaisedButton label="Submit" type="submit" primary={true} />
          </CardActions>
          </form>
          <ol>
            {renderList}
          </ol>
        </Card>
      </div>

    )
  }
}

export default ContactForm;
