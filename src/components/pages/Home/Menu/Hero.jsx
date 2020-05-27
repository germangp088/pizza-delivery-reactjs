import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Italian from '../../../common/Italian';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#d2d2d2',
    padding: theme.spacing(8, 0),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to
            </Typography>
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              <Italian text="Formaggio piccante" />
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Enjoy our <strong><Italian text="MOLTO BENE" /></strong> products.
            </Typography>
          </Container>
        </div>
    </React.Fragment>
  );
}

export default Hero;