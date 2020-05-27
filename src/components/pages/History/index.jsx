import React from 'react';
import { FormHelperText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { AppConsumer } from "../../../context";
import Order from './Order';
import { getIP, getHistory } from "../../../request";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
    this.getHistory = this.getHistory.bind(true);
  }

  componentDidMount= async() => {
    await this.getHistory();
  }

  getHistory = async() => {
    try {
      const ip = await getIP();
      console.log(ip)
      const history = await getHistory(ip);
      console.log({history})
      this.setState({
        history: history
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  }

  render() {
    return (
      <AppConsumer>
        {value => {
          const { errorMessage, order_id, finish } = value;
          const orderProcessed = [];
          return (
            <main>
              {
                order_id > 0 && finish()
              }
              <FormHelperText error={true}>{ errorMessage && 'There was an error trying to retrieve information, come back later.'}</FormHelperText>
              <Typography variant="h4" align="center" gutterBottom>
                History orders
              </Typography>
              {
                this.state.history &&
                this.state.history.map((product) => {
                  const procesed = orderProcessed.some(x => product.id_order === x);
                  if(!procesed) {
                    orderProcessed.push(product.id_order);
                    const order = this.state.history.filter(o => product.id_order === o.id_order);
                    return <Order order={order} />
                  }
                  return null;
                })
              }
            </main>
          );
        }}
      </AppConsumer>
    );
  }
}

export default History;