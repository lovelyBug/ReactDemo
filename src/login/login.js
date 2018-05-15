import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { NavLink,Redirect } from 'react-router-dom';
import './login.css';
const FormItem = Form.Item;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
       username: '',
       password: '',
       redirect: false,
      };
  }
  handleSubmit = (e) => {
    const { userName,password } = this.state;
    if(userName === 'root' && password === 'root'){
      this.setState({ redirect: true });
    }
  }
  handleInput = (e) => {
    let inputValue = e.target.value;
    switch(e.target.type){
      case 'text':
        this.setState({ userName: inputValue });
        break;
      case 'password':
        this.setState({ password: inputValue });
        break;
      default:
        break;
    }
    
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  render() {
    if(this.state.redirect){
      return(
        <Redirect push to="/" />
      )
    }
    const { userName,password } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className="container">
        <h1 className="login-title">Computer Examination</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <Input
              value={userName}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              placeholder="管理员账号/职工号/学号"
              onChange={this.handleInput}
              ref={node => this.userNameInput = node}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Input
              value={password}
              prefix={<Icon type="lock"
              style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
              onChange={this.handleInput}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Checkbox className="login-form-checkbox">记住我</Checkbox>
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Login;