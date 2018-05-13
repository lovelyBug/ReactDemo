import React, { Component } from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
class RouterConfig extends Component {
  render() {
    return(
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
          </Switch>
      </HashRouter>
    )
  }
}
export default RouterConfig;