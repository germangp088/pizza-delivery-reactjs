import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import CakeIcon from '@material-ui/icons/Cake';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { FormHelperText } from '@material-ui/core';
import Hero from './Hero';
import Products from './Products';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  const filterProduct = (product_type) => props.products.filter(x => x.product_type === product_type);
  const isEmpty = (arr) => arr.length === 0;

  const pizzas = filterProduct("Pizza");
  const desserts = filterProduct("Dessert");
  const drinks = filterProduct("Drink");

  return (
    <React.Fragment>
      <Hero />
      <Container className={classes.cardGrid} maxWidth="md">
        {
          (isEmpty(pizzas) && isEmpty(desserts) && isEmpty(drinks)) &&
          <FormHelperText>Loading...</FormHelperText>
        }
        {
          pizzas.length > 0 && 
          <Products productType="Pizzas" products={pizzas}>
            <LocalPizzaIcon />
          </Products>
        }
        {
          desserts.length > 0 && 
          <Products productType="Desserts" products={desserts}>
            <CakeIcon />
          </Products>
        }
        {
          drinks.length > 0 && 
          <Products productType="Drinks" products={drinks}>
            <LocalDrinkIcon />
          </Products>
        }
      </Container>
    </React.Fragment>
  );
}

export default Menu;