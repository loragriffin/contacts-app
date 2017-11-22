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
    let contactOnForm = {
      key: uid(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };

    //you cannot change the state directly so you must create a temporary array into which you can push contact
    // let tempArray = this.state.contacts;
    // tempArray.push(contact);
    //reset the text fields to empty when the submit button is pushed.
    this.setState({
      // contacts: tempArray,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    });

    this.props.callback(contactOnForm);

    event.preventDefault();
  }

  render() {

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
        </Card>
      </div>

    )
  }
}

export default ContactForm;
