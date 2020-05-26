import React, { Component } from "react";
import { getProducts } from "./request";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    errorMessage: ''
  };

  async componentDidMount() {
    await this.getData();
  }

  getData = async() => {
    try {
    await this.getProducts();
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  }

  getProducts = async() => {
    const products = await getProducts();
    this.setState({
      products: products
    });
  }

  addToCart = id => {
    console.log(`hello from add to cart is ${id} `);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
