import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Item from './Item';

const Product = (props) => {
    const { product, removeToCart } = props;
    return (
        <React.Fragment>
            <Item
                primary={product.name}
                secondary={product.description}
                price={`$${parseFloat(product.quantity) * parseFloat(product.price)}`}
                variant="body2"
            >
                <Typography><strong>Qty</strong>: {product.quantity}</Typography>
                <IconButton
                    color="primary"
                    aria-label="remove to shopping cart"
                    onClick={() => {
                        removeToCart(product.id);
                    }}>
                    <RemoveShoppingCartIcon />
                </IconButton>
            </Item>
        </React.Fragment>
    );
}

export default Product;