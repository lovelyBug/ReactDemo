import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact>
          <Button type="primary" loading >
            Login .....
          </Button>
        </NavLink>
      </div>
    );
  }

}

export default Home;
