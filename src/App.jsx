import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainLayout from './components/template/MainLayout';
import Home from "./components/pages/Home";
import History from "./components/pages/History";
import OrderProcess from "./components/pages/OrderProcess";
import NotFound from './components/pages/Errors/404';
import { AppConsumer } from "./context";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const App = () => {
  const classes = useStyles();

  return (
    <AppConsumer>
      {value => {
        const { loading} = value;
            return(
                <HashRouter>
                    <MainLayout>
                        <Backdrop className={classes.backdrop} open={loading}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/history" component={History}/>
                            <Route path="/orderProcess" component={OrderProcess}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </MainLayout>
                </HashRouter>
            );
        }}
    </AppConsumer>
    );
}
export default App;