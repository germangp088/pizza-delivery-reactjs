import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckOut from './CheckOut';
import Order from './Order';
import CustomerForm from './CustomerForm';
import { AppConsumer } from "../../../context";
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(3, 3, 3, 3),
    marginTop: theme.spacing(3),
  },
}));

const OrderProcess = () => {

  const getSteps = () => ['Personal information', 'Checkout'];

  const classes = useStyles();

  const [values, setValues] = React.useState({
    nameError: false,
    emailError: false,
    phoneError: false,
    addressError: false
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <AppConsumer>
      {value => {
        const { cart, customer, changeCustomerValue, postOrder, order_id, finish } = value;

        const getStepContent = (step) => {
          switch (step) {
            case 0:
              return <CustomerForm
                      customer={customer}
                      changeCustomerValue={changeCustomerValue}
                      values={values}
                      setValues={setValues}
                    />;
            case 1:
              if(customer.name === "" || customer.email === "" || customer.contact_number === "" || customer.delivery_address === "") {
                handleBack();
              }
              return <Order />;
            default:
              return 'Unknown step';
          }
        };

        return (
          <div className={classes.root}>
            {
              cart.length === 0 && <Redirect to='/'/>
            }
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Container className={classes.cardGrid} maxWidth="md">
              <Paper 
                elevation={3} 
                className={classes.paper}>
                {activeStep === steps.length ? (
                  <CheckOut
                    instructions={classes.instructions}
                    order_id={order_id}
                    finish={finish}
                  />
                ) : (
                  <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                      {
                        activeStep === steps.length - 1 ? 
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={() => postOrder(handleNext)}
                        className={classes.button}
                      >
                        Place order
                      </Button> :
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                      </Button>}
                    </div>
                  </div>
                )}
              </Paper>
            </Container>
          </div>
        );
      }}
    </AppConsumer>
  );
}

export default OrderProcess;