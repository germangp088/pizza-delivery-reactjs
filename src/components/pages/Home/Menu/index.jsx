import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import CakeIcon from '@material-ui/icons/Cake';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import Hero from './Hero';
import Products from './Products';
import { AppConsumer } from "../../../../context";
import Currency from '../../../common/Currency';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  const filterType = (arr, product_type) => arr.filter(x => x.product_type === product_type);

  const pizzas = filterType(props.products, "Pizza");
  const desserts = filterType(props.products, "Dessert");
  const drinks = filterType(props.products, "Drink");

  const pizzasCart = filterType(props.cart, "Pizza");
  const dessertsCart = filterType(props.cart, "Dessert");
  const drinksCart = filterType(props.cart, "Drink");

  return (
    <AppConsumer>
      {value => {
          const { currencies, currency, changeCurrency } = value;
          return (
            <React.Fragment>
              <Hero />
              <Container className={classes.cardGrid} maxWidth="md" align="center">
                {
                  currencies.length > 0 && 
                  <Currency
                      currencies={currencies}
                      currency={currency}
                      changeCurrency={changeCurrency} />
                }
                {
                  pizzas.length > 0 && 
                  <Products productType="Pizzas"
                    products={pizzas}
                    cart={pizzasCart} 
                    symbol={currency.symbol}>
                    <LocalPizzaIcon fontSize="large"/>
                  </Products>
                }
                {
                  desserts.length > 0 && 
                  <Products productType="Desserts"
                    products={desserts}
                    cart={dessertsCart}
                    symbol={currency.symbol}>
                    <CakeIcon fontSize="large"/>
                  </Products>
                }
                {
                  drinks.length > 0 && 
                  <Products productType="Drinks"
                    products={drinks} 
                    art={drinksCart}
                    symbol={currency.symbol}>
                    <LocalDrinkIcon fontSize="large"/>
                  </Products>
                }
              </Container>
            </React.Fragment>
          );
        }}
    </AppConsumer>
  );
}
export default Menu;