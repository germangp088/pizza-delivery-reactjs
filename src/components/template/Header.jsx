import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <AppBar position="relative">
        <Toolbar>
          <LocalPizzaIcon className={props.classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Formaggio piccante
          </Typography>
          <Navbar classes={props.classes} />
        </Toolbar>
    </AppBar>
  );
}

export default Header;