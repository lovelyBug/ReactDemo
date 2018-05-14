import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './home.css';
import Login from '../login/login';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
//import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" >Logo</div>
          <div className="logo" >搜索框</div>
          <div className="user-info" >用户信息</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px',float: 'right',marginRight: '100px'}}
          >
            <Menu.Item key="1">导航栏 1</Menu.Item>
            <Menu.Item key="2">导航栏 2</Menu.Item>
            <Menu.Item key="3">导航栏 3</Menu.Item>
          </Menu>
          
        </Header>
        <Content style={{ padding: '0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={150} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />管理员</span>}>
                  <Menu.Item key="1"><Icon type="user" />管理员1</Menu.Item>
                  <Menu.Item key="2"><Icon type="user" />管理员2</Menu.Item>
                  <Menu.Item key="3"><Icon type="user" />管理员3</Menu.Item>
                  <Menu.Item key="4"><Icon type="user" />管理员4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />老师</span>}>
                  <Menu.Item key="5"><Icon type="user" />老师1</Menu.Item>
                  <Menu.Item key="6"><Icon type="user" />老师2</Menu.Item>
                  <Menu.Item key="7"><Icon type="user" />老师3</Menu.Item>
                  <Menu.Item key="8"><Icon type="user" />老师4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />学生</span>}>
                  <Menu.Item key="9"><Icon type="user" />学生1</Menu.Item>
                  <Menu.Item key="10"><Icon type="user" />学生2</Menu.Item>
                  <Menu.Item key="11"><Icon type="user" />学生3</Menu.Item>
                  <Menu.Item key="12"><Icon type="user" />学生4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0', minHeight: 450 }}>
              <Login/>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Computer Examination ©2018 Created by clf_programing
        </Footer>
      </Layout>
    );
  }

}

export default Home;
