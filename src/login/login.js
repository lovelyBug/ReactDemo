import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home" exact>
          <Button type="primary">
            Login!
          </Button>
        </NavLink>
      </div>
    );
  }

}

export default Login;
