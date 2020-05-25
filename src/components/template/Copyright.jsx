import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
      <Typography variant="body2">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Formaggio piccante
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright;