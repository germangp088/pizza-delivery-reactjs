import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Phone from './Phone';

const CustomerForm = (props) => {
  const { name, email, delivery_address, contact_number } = props.customer;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Full name"
            fullWidth
            defaultValue={name}
            onBlur={(e)=> props.changeCustomerValue("name", e.target.value)}
          />
        </Grid>
        <Phone changeCustomerValue={props.changeCustomerValue} contact_number={contact_number}/>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            defaultValue={email}
            onBlur={(e)=> props.changeCustomerValue("email", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
            defaultValue={delivery_address}
            onBlur={(e)=> props.changeCustomerValue("delivery_address", e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomerForm;