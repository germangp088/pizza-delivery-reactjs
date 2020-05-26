import React from 'react';
import { AppConsumer } from "../../../../context";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Product from './Product';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Order = () => {
  const classes = useStyles();

  return (
    <AppConsumer>
      {value => {
        const { cart, removeToCart, subTotal, shippingFee, total } = value;

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  Order summary
                </Typography>
                <List disablePadding>
                  {cart.map((product) => (
                    <Product
                      key={`Order_${product.id}`}
                      product={product}
                      removeToCart={removeToCart}
                    />
                  ))}
                  <Item
                    primary="Sub Total"
                    variant="subtitle1"
                    price={`€${subTotal}`}
                  />
                  <Item
                    primary="Shipping"
                    variant="subtitle1"
                    price={`€${shippingFee}`}
                  />
                  <Item
                    primary="Total"
                    variant="subtitle1"
                    className={classes.total}
                    price={`€${total}`}
                  />
                </List>
            </React.Fragment>
            );
        }}
    </AppConsumer>
  );
}

export default Order;