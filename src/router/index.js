import React, { Component } from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Login from '../page/Login/Login';
import Home from '../page/Home/Home';
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