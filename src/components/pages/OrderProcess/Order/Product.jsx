import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Item from './Item';
import exchange from './exchange';

const Product = (props) => {
    const { product, removeToCart, symbol } = props;
    return (
        <React.Fragment>
            <Item
                primary={product.name}
                secondary={product.description}
                price={`${props.symbol}${exchange((parseFloat(product.quantity) * parseFloat(product.price)), symbol)}`}
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