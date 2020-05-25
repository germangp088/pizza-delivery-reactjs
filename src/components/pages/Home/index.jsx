import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Home = () => {

  return (
    <React.Fragment>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Formaggio piccante, enjoy our <strong>MOLTO BENE</strong> products
          </Typography>
        </Box>
    </React.Fragment>
  );
}

export default Home;