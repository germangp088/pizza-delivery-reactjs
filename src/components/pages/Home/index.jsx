import React from 'react';
import { getProducts } from "../../../request";
import { FormHelperText } from '@material-ui/core';
import Menu from './Menu/Menu';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      errorMessage: ''
    };
    this.getProducts = this.getProducts.bind(this);
  }

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async() => {
    try {
      const products = await getProducts();
      this.setState({
        products: products
      });
    } catch (error) {
      console.log({error})
      this.setState({
        errorMessage: error.message
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <FormHelperText error={true}>{this.state.errorMessage}</FormHelperText>
          <Menu products={this.state.products} />
        </main>
      </React.Fragment>
      );
  }
}

export default Home;