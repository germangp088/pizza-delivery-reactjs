import React, { Component } from "react";
import { getProducts, getShippingFee, getCurrencies } from "./request";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    cart: [],
    currencies: [],
    currency: {},
    subTotal: 0,
    shipping_fee: 0,
    total: 0,
    customer: {
      name: '',
      email: '',
      contact_number: '',
      delivery_address: ''
    },
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
    const shipping_fee = await getShippingFee();
    this.setState({
      shipping_fee: shipping_fee
    });
  }

  getCurrencies = async() => {
    const currencies = await getCurrencies();
    this.setState({
      currency: currencies.find(x => x.currency === "Euro"),
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

  changeCurrency = (currency) => {
    this.setState({
      currency: currency
    });
  }

  calculateSubtotal = (cart) => {
    const shipping_fee = parseFloat(this.state.shipping_fee);
    let subTotal = 0;
    cart.forEach((product) => {
      subTotal += parseFloat(product.quantity) * parseFloat(product.price)
    });
    // eslint-disable-next-line
    const total = eval(subTotal) + eval(shipping_fee);

    this.setState({
      cart: cart,
      subTotal: parseFloat(subTotal).toFixed(2),
      total: parseFloat(total).toFixed(2)
    });
  }

  changeCustomerValue = (prop, value) => {
    let customer = this.state.customer;
    customer[prop] = value;
    this.setState({
      customer: customer
    });
    console.log(this.state.customer);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeToCart: this.removeToCart,
          resetCart: this.resetCart,
          changeCurrency: this.changeCurrency,
          changeCustomerValue: this.changeCustomerValue
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
