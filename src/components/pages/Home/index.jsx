import React from 'react';
import { FormHelperText } from '@material-ui/core';
import Menu from './Menu';
import { AppConsumer } from "../../../context";

const Home = () => {
  return (
    <AppConsumer>
      {value => {
        const { errorMessage, products, cart, order_id, finish } = value;
        return (
          <main>
            {
              order_id > 0 && finish()
            }
            <FormHelperText error={true}>{ errorMessage && 'There was an error trying to retrieve information, come back later.'}</FormHelperText>
            <Menu products={products} cart={cart} />
          </main>
        );
      }}
    </AppConsumer>
  );
}

export default Home;