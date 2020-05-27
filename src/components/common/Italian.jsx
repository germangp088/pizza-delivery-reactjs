import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  green: {
    color: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.background.default,
  },
  red: {
    color: theme.palette.secondary.main,
  },
}));

const Italian = (props) => {
  const classes = useStyles();

  const lengthToPaint = props.text.length / 3;
  const greenText = props.text.slice(0, lengthToPaint);
  const whiteText = props.text.slice(lengthToPaint, lengthToPaint*2);
  const redText = props.text.slice(lengthToPaint*2, props.text.length);

  return (
    <React.Fragment>
        <span className={classes.green}>{greenText}</span>
        <span className={classes.white}>{whiteText}</span>
        <span className={classes.red}>{redText}</span>
    </React.Fragment>
  );
}

export default Italian;