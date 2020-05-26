import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getProducts } from "../../../request";
import { FormHelperText } from '@material-ui/core';

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
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Formaggio piccante, enjoy our <strong>MOLTO BENE</strong> products
            </Typography>
          </Box>
          <FormHelperText error={true}>{this.state.errorMessage}</FormHelperText>
      </React.Fragment>
      );
  }
}

export default Home;