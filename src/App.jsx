import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainLayout from './components/template/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Formaggio piccante, enjoy our <strong>MOLTO BENE</strong> products
        </Typography>
      </Box>
    </MainLayout>
  );
}

export default App;