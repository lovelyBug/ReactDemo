import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './login.css';
class Login extends Component {
  
  state={
    count: 0
  }
  handleClick(clickType){
    switch(clickType){
      case 'add':
        this.setState({count: this.state.count + 1});
        break;
      case 'del':
        this.setState({count: this.state.count - 1});
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
        {/* <NavLink to="/home" exact>
          <Button type="primary">
            Login!
          </Button>
        </NavLink> */}
        <Button type="primary" onClick={()=>{this.handleClick('add')}}>
            +1
        </Button>
        <Button>{this.state.count}</Button>
        <Button type="primary" onClick={()=>{this.handleClick('del')}}>
            -1
        </Button>
      </div>
    );
  }

}

export default Login;
