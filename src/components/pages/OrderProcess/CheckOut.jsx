import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';

const CheckOut = (props) => {

  return (
    <React.Fragment>
      <div>
        <Typography className={props.instructions}>
          <CheckCircleIcon /> All steps completed - order code: {props.order_id}
        </Typography>
        <Typography className={props.instructions}>
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