import React, { Component } from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Login from '../page/Login/Login';
import Home from '../page/Home/Home';
import ForgotPassword from '../page/ForgotPassword/ForgotPassword';
class RouterConfig extends Component {
  render() {
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
        </Switch>
      </HashRouter>
    )
  }
}
export default RouterConfig;