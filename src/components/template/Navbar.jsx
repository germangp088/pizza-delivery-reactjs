import React from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = (props) => {
    const [value, setValue] = React.useState(0);

    return (
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
          switch (newValue) {
            case 0:
                props.history.push('/');
              break;
            case 1:
                props.history.push('/contact');
              break;
            case 2:
              props.history.push('/history');
              break;
          }
        }}
        showLabels
        className={props.classes.navbar}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          classes={{ selected: props.classes.selected }}
          className={props.classes.navitem} />
        <BottomNavigationAction
          label="Contact"
          icon={<ContactMailIcon />}
          classes={{ selected: props.classes.selected }}
          className={props.classes.navitem} />
        <BottomNavigationAction
          label="History"
          icon={<RestoreIcon />}
          classes={{ selected: props.classes.selected }}
          className={props.classes.navitem} />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          classes={{ selected: props.classes.selected }}
          className={props.classes.navitem} />
      </BottomNavigation>
    );
}

export default withRouter(Navbar);