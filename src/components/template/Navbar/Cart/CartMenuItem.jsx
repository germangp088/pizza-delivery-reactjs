import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { FormHelperText } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const CartMenuItem = (props) => {
    const { product, removeToCart } = props;
    return (
        <MenuItem>
            <FormHelperText component="p">{product.name} - €{product.price} - Qty: {product.quantity}</FormHelperText>
            <IconButton
                color="primary"
                aria-label="remove to shopping cart"
                onClick={() => {
                    removeToCart(product.id);
                }}>
                <RemoveShoppingCartIcon />
            </IconButton>
        </MenuItem>
    );
}

export default CartMenuItem;