import React from 'react';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';

const CheckOut = (props) => {

  return (
    <React.Fragment>
      <div>
        <Typography variant="h5" className={props.instructions} gutterBottom>
          <DoneIcon /> All steps completed - order code: {props.order_id}
        </Typography>
        <Typography variant="h5"  className={props.instructions} gutterBottom>
          <AvTimerIcon />Estimated time: 20 - 40 min.
        </Typography>
        <Button
            color="secondary"
            aria-label="home"
            href="/"
            onClick={props.finish}
            startIcon={<Home />}
          >
            Home
        </Button>
      </div>
    </React.Fragment>
  );
}

export default CheckOut;