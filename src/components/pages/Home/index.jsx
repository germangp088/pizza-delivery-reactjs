import React from 'react';
import { FormHelperText } from '@material-ui/core';
import Menu from './Menu/Menu';
import { AppConsumer } from "../../../context";

const Home = () => {
  return (
    <AppConsumer>
      {value => {
        const { errorProducts, products, cart} = value;
        return (
          <main>
            <FormHelperText error={true}>{ errorProducts && 'There was an error trying to get products, come back later.'}</FormHelperText>
            <Menu products={products} cart={cart} />
          </main>
        );
      }}
    </AppConsumer>
  );
}

export default Home;