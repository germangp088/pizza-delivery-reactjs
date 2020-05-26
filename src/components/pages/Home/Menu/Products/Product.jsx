import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Ingredients from './Ingredients';
import { AppConsumer } from "../../../../../context";

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Product = (props) => {

  const product = props.product;
  const [values, setValues] = React.useState({
    quantity: 1
  });
  
  const onChange = (e) => {
    if(!e.target.value){
      setValues({ quantity: 1 });
      return;
    }
    setValues({ quantity: parseInt(e.target.value) });
  }

  const classes = useStyles();
  const description = product.description.split("Ingredients:");

  return (
    <AppConsumer>
      {value => {
        const { addToCart} = value;
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`/images/${product.image}`}
                title={product.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>
                  {description[0]}
                  {description.length > 1 && <Ingredients ingredients={description[1]} />}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography gutterBottom variant="h5" component="h2">
                  €{product.price}
                </Typography>
                <TextField
                  id="quantity"
                  type="number"
                  className={classes.root}
                  InputProps={{ inputProps: { min: 1 } }}
                  value={values.quantity}
                  onChange={onChange}
                />
                <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => {
                  addToCart(product, values.quantity);
                  setValues({ quantity: 1 });
                }}>
                  <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      }}
    </AppConsumer>
  );
}

export default Product;