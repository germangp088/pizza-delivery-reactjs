import React, { Component } from "react";
import { getProducts, getShippingFee, getCurrencies, getIP, postOrder } from "./request";

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
      delivery_address: '',
      ip: ''
    },
    order_id: 0,
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
      await this.getIP();
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

  getIP = async() => {
    const ip = await getIP();
    this.changeCustomerValue("ip", ip);
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
  }

  finish = () => {
    this.setState({
      cart: [],
      subTotal: 0,
      total: 0,
      currency: this.state.currencies.find(x => x.currency === "Euro"),
      order_id: 0
    });
  }

  postOrder = async(callback) => {
    const order = {
      customer: {
        ...this.state.customer
      },
      bill: {
        id_currency: this.state.currency.id,
        subtotal: this.state.subTotal,
        shipping_fee: this.state.shipping_fee
      },
      products: this.state.cart.map((product) => {
        return {
          id_product: product.id,
          price: product.price,
          quantity: product.quantity
        }
      })
    };
    
    try {
      const order_id = await postOrder(order);
      this.setState({
        order_id: order_id
      });
      callback();
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeToCart: this.removeToCart,
          finish: this.finish,
          changeCurrency: this.changeCurrency,
          changeCustomerValue: this.changeCustomerValue,
          postOrder: this.postOrder
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
