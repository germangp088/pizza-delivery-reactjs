import React, { Component } from "react";
import { getProducts } from "./request";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    cart: [],
    errorProducts: false
  };

  async componentDidMount() {
    await this.getData();
  }

  getData = async() => {
    try {
    await this.getProducts();
    } catch (error) {
      this.setState({
        errorProducts: true
      });
    }
  }

  getProducts = async() => {
    const products = await getProducts();
    this.setState({
      products: products
    });
  }

  addToCart = (product, quantity) => {
    const pc = this.state.cart.find(x => x.id === product.id);
    if(pc) {
      pc.quantity += parseInt(quantity);
      this.setState({
        cart: this.state.cart
      });
    } else {
      product.quantity = parseInt(quantity);
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
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
