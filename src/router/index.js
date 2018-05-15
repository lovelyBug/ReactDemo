import React, { Component } from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
class RouterConfig extends Component {
  render() {
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}
export default RouterConfig;