import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Ingredients from './Ingredients';

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

  const onChange = (e) => {
    console.log(e.target.value)
    if(e.target.value < 0){
      return;
    }
  }

  const classes = useStyles();
  const product = props.product;
  const description = product.description.split("Ingredients:");

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
          <Button size="small" color="secondary">
            Remove
          </Button>
          <TextField
            id="quantity"
            type="number"
            className={classes.root}
            defaultValue={0}
            onChange={onChange}
          />
          <Button size="small" color="primary">
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;