import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Product from './Product';

const Products = (props) => {
  return (
    <React.Fragment>
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          {props.children}{props.productType}
        </Typography>
        <Grid container spacing={4}>
          {props.products.map((product) => (
            <Product key={`Product_${product.id}`} product={product} cart={props.cart} />
          ))}
        </Grid>
    </React.Fragment>
  );
}

export default Products;