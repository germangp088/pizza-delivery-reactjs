import React, { Component } from "react";
import { getProducts, getShippingFee, getCurrencies } from "./request";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    cart: [],
    currencies: [],
    shippingFee: 0,
    errorMessage: ''
  };

  async componentDidMount() {
    await this.getData();
  }

  getData = async() => {
    try {
      await this.getProducts();
      await this.getShippingFee();
      await this.getCurrencies();
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

  getShippingFee = async() => {
    const shippingFee = await getShippingFee();
    this.setState({
      shippingFee: shippingFee
    });
  }

  getCurrencies = async() => {
    const currencies = await getCurrencies();
    this.setState({
      currencies: currencies
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

  removeToCart = id => {
    const newCart = this.state.cart.filter(x => x.id !== id);
    this.setState({
      cart: newCart
    });
  };

  resetCart = () => {
    this.setState({
      cart: []
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeToCart: this.removeToCart,
          resetCart: this.resetCart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
