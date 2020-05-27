import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Item from '../../common/Item';
import Paper from '@material-ui/core/Paper';
import Product from '../../common/Product';

const useStyles = makeStyles((theme) => ({
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3, 3, 3, 3),
    marginBottom: theme.spacing(3),
  },
}));

const Order = (props) => {
  const classes = useStyles();

  const { order } = props;

  return (
    <React.Fragment>
        <Container maxWidth="sm">
          <Paper 
            elevation={3} 
            className={classes.paper}>
            <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
              Order Nro: {order[0].id_order}
            </Typography>
            <List disablePadding>
              {
                order.map((product) => {
                  return <Product
                    key={`ProductDetail_${product.id}`}
                    product={product}
                    symbol={product.symbol}
                  />
                })
              }
              <Item
                primary="Sub Total"
                variant="subtitle1"
                price={`${order[0].symbol}${order[0].subtotal}`}
              />
              <Item
                primary="Shipping"
                variant="subtitle1"
                price={`${order[0].symbol}${order[0].shipping_fee}`}
              />
              <Item
                primary="Total"
                variant="subtitle1"
                className={classes.total}
                price={`${order[0].symbol}${parseFloat(parseFloat(order[0].subtotal) + parseFloat(order[0].shipping_fee)).toFixed(2)}`}
              />
            </List>
          </Paper>
        </Container>
    </React.Fragment>
  );
}

export default Order;