import React from 'react';
import Typography from '@material-ui/core/Typography';
import Item from './Item';
import exchange from './exchange';

const Product = (props) => {
    const { product, symbol } = props;
    return (
        <React.Fragment>
            <Item
                primary={product.name}
                secondary={product.description}
                price={`${props.symbol}${exchange((parseFloat(product.quantity) * parseFloat(product.price)), symbol)}`}
                variant="body2"
            >
                <Typography><strong>Qty</strong>: {product.quantity}</Typography>
                { props.children }
            </Item>
        </React.Fragment>
    );
}

export default Product;