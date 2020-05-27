import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

const Products = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.product}>
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          {props.children}{props.productType}
        </Typography>
        <Grid container spacing={4}>
          {props.products.map((product) => (
            <Product key={`Product_${product.id}`} product={product} cart={props.cart} />
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Products;