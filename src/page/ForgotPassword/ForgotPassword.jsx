import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { Redirect } from 'react-router-dom';
import './ForgotPassword.css';
const FormItem = Form.Item;
class ForgotPassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
         redirect: false,
         checked: false,
        };
       
        message.config({
          top: 150,
          duration: 1,
          maxCount: 3
        });
    }
    render() {
        if(this.state.redirect){
          return(
            <Redirect push to="/" />
          )
        }
        const { userName,email } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
          <div className="container">
            <h1 className="login-title">重置密码</h1>
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
                  value={email}
                  prefix={<Icon type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  placeholder="邮箱"
                  onChange={this.handleInput}
                  size="large"
                />
              </FormItem>
              <FormItem>
                <Input
                  value={email}
                  prefix={<Icon type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  placeholder="邮箱"
                  onChange={this.handleInput}
                  size="large"
                />
              </FormItem>
              <FormItem>
     
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登陆
                </Button>
              </FormItem>
            </Form>
          </div>
        );
      }
    }
    export default ForgotPassword;
