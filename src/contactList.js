import React, { Component } from 'react';

import Card from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import CallIcon from 'material-ui/svg-icons/communication/call';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import HomeIcon from 'material-ui/svg-icons/action/home';



class ContactList extends Component {

  deleteAlert() {
    if(window.confirm("Are you sure you want to delete this contact?") == true) {
      console.log('contact deleted');
    } else {
      console.log('contact not deleted');
    }
  }

  render() {

    let contacts = this.props.contacts;

    contacts.sort(function (a, b) {
      return a.name > b.name;
    });

    let renderContactsList = contacts.map((contact)=>{
      return(
        <ListItem
          key={contact.key}
          primaryText={contact.name}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              key={contact.key + contact.phone}
              leftIcon={<CallIcon />}
              primaryText={contact.phone}
            />,
            <ListItem
              key={contact.key + contact.email}
              leftIcon={<EmailIcon />}
              primaryText={contact.email}
            />,
            <ListItem
              key={contact.key + contact.address}
              leftIcon={<HomeIcon />}
              primaryText={
                <span>
                {contact.address}
                <br />
                <br />
                {contact.city}, {contact.state} {contact.zip}
                </span>
              }
            />,
            <ListItem
              key={contact.key + 'delete'}
              leftIcon={<DeleteIcon />}
              primaryText='Delete Contact'
              onClick={this.deleteAlert}
              />
          ]}
        />
      )
    })
    return (
      <div>
        <Card>
          <List>
          <Subheader>Contact List</Subheader>
          {renderContactsList}
          </List>
        </Card>
      </div>
    )
  }

}

export default ContactList;
