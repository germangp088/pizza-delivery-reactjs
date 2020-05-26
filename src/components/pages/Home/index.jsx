import React from 'react';
import { FormHelperText } from '@material-ui/core';
import Menu from './Menu/Menu';
import { AppConsumer } from "../../../context";

const Home = () => {
  return (
    <AppConsumer>
      {value => {
        const { errorMessage, products} = value;
        return (
          <main>
            <FormHelperText error={true}>{errorMessage}</FormHelperText>
            <Menu products={products} />
          </main>
        );
      }}
    </AppConsumer>
  );
}

export default Home;