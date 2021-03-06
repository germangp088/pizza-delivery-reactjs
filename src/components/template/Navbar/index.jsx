import React from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import Cart from "./Cart";
import { AppConsumer } from "../../../context";

const Navbar = (props) => {
    const [value, setValue] = React.useState(0);

    return (
      <AppConsumer>
        {context => {
          const { cleanErrorMessage} = context;
            return (
              <BottomNavigation
                value={value}
                onChange={(_event, newValue) => {
                  setValue(newValue);
                  cleanErrorMessage();
                  switch (newValue) {
                    case 0:
                        props.history.push('/');
                      break;
                    case 1:
                      props.history.push('/history');
                      break;
                    default:
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
                  label="History"
                  icon={<RestoreIcon />}
                  classes={{ selected: props.classes.selected }}
                  className={props.classes.navitem} />
                <Cart classes={props.classes} />
            </BottomNavigation>
        );
      }}
    </AppConsumer>
  );
}
export default withRouter(Navbar);