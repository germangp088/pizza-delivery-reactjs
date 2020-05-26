import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { AppConsumer } from "../../../../context";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import CartMenuItem from './CartMenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

const Cart = (props) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

    return (
        <AppConsumer>
          {value => {
            const { cart, removeToCart } = value;
            let products = 0;
            cart.forEach((product) => {
              products += product.quantity
            });

            return (
                <React.Fragment>
                      <Button
                          classes={{ selected: props.classes.selected }}
                          className={props.classes.navitem} 
                          ref={anchorRef}
                          aria-controls={open ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                      >
                        <Badge badgeContent={products} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      </Button>
                    
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <React.Fragment>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                  {cart.map((product) => (
                                      <CartMenuItem key={`Cart_${product.id}`} product={product} removeToCart={removeToCart} />
                                  ))}
                                </MenuList>
                                {
                                  cart.length > 0 &&
                                  <Link  to={{pathname : "/orderProcess"}}>
                                    <Button
                                      onClick={handleClose}
                                      variant="contained"
                                      color="primary" 
                                      className={props.classes.order} >
                                      Order
                                    </Button>
                                  </Link>
                                }
                              </React.Fragment>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                </Popper>
              </React.Fragment>
            );
        }}
        </AppConsumer>
    );
}

export default Cart;