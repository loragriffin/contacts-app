import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class ContactForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    }
  }

  render() {
    return (
      <div>
        <Card className="md-card">
        <form>
          <CardTitle title="Add Contact" subtitle="Add a new contact to your address book" />
          <CardText>
            <TextField floatingLabelText="Contact Name" />
            <br />

            <TextField floatingLabelText="E-mail" />
            <br />

            <TextField floatingLabelText="Phone Number" />

            <SelectField floatingLabelText="Phone Number Type">
              <MenuItem value="Mobile" primaryText="Mobile" />
              <MenuItem value="Work" primaryText="Work" />
            </SelectField>
            <br />

            <TextField floatingLabelText="Address" />
            <br />

            <TextField floatingLabelText="City" />

            <TextField floatingLabelText="State" />

            <TextField floatingLabelText="Zip Code" />
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
