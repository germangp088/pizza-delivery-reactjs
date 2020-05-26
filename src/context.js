import React, { Component } from "react";
import { getProducts, getShippingFee, getCurrencies } from "./request";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    cart: [],
    currencies: [],
    subTotal: 0,
    shippingFee: 0,
    total: 0,
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
      this.calculateSubtotal(this.state.cart);
    } else {
      product.quantity = parseInt(quantity);
      this.calculateSubtotal([...this.state.cart, product]);
    }
  };

  removeToCart = id => {
    const newCart = this.state.cart.filter(x => x.id !== id);
    this.calculateSubtotal(newCart);
  };

  resetCart = () => {
    this.setState({
      cart: [],
      subTotal: 0,
      total: 0
    });
  };

  calculateSubtotal = (cart) => {
    const shippingFee = parseFloat(this.state.shippingFee);
    let subTotal = 0;
    cart.forEach((product) => {
      subTotal += parseFloat(product.quantity) * parseFloat(product.price)
    });
    // eslint-disable-next-line
    const total = eval(subTotal) + eval(shippingFee);

    this.setState({
      cart: cart,
      subTotal: parseFloat(subTotal).toFixed(2),
      total: parseFloat(total).toFixed(2)
    });
  }

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
