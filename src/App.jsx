import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainLayout from './components/template/MainLayout';
import Home from "./components/pages/Home";
import History from "./components/pages/History";
import OrderProcess from "./components/pages/OrderProcess";
import NotFound from './components/pages/Errors/404';
import { AppConsumer } from "./context";
import Loading from './components/common/Loading';

const App = () => {
  return (
    <AppConsumer>
      {value => {
        const { loading} = value;
            return(
                <HashRouter>
                    <MainLayout>
                        <Loading open={loading} />
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