import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <AppBar position="relative">
        <Toolbar>
          <LocalPizzaIcon className={props.classes.icon} />
          <Navbar classes={props.classes} />
        </Toolbar>
    </AppBar>
  );
}

export default Header;