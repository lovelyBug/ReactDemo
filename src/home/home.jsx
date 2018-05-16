import React, { Component } from 'react';
import { Layout,Menu,Icon,Input,Avatar,Affix,Dropdown } from 'antd';
import './home.css';
import { Redirect } from 'react-router-dom';
import MyCookies from '../cookie/MyCookies';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isToLogin: false,
       userName: '',
      };
  }
  componentWillMount(){
    if(MyCookies.getCookie('name').length !== 0){
      this.setState({
        isToLogin: false,
        userName: MyCookies.getCookie('name')
      });
    }else{
      this.setState({
        isToLogin: true,
      });
    }
  }
  /**
   * 退出登录
   */
  userLogOut(){
    MyCookies.setCookie("name",this.state.userName,-1,"/");
    this.setState({
      isToLogin: true,
    });
  }
  render() {
    if(this.state.isToLogin){
      return(
        <Redirect push to="/login" />
      )
    }
    return (
      <Layout>
        <Affix>
          <Header className="header">
            <div className="logo-text" >Computer Examination</div>
            <div className="user-info" >
              <Dropdown
               overlay={
                <Menu>
                  <Menu.Item key="1">
                    {this.state.userName}
                  </Menu.Item>
                  <Menu.Item key="2">
                    修改密码
                  </Menu.Item>
                  <Menu.Item key="3" onClick={()=>{this.userLogOut()}}>
                    登出
                  </Menu.Item>
                </Menu>
              }
                placement="bottomCenter">
                <Avatar style={{ backgroundColor: '#1DA57A' }} icon="user" />
              </Dropdown>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px',float: 'left'}}
            >
              <Menu.Item key="1">教师管理</Menu.Item>
              <Menu.Item key="2">学生管理</Menu.Item>
              <Menu.Item key="3">上传试卷</Menu.Item>
              <Menu.Item key="4">下载试卷</Menu.Item>
            </Menu>
            <div className="search-input" >
              <Search
                placeholder="输入搜索信息..."
                onSearch={value => console.log(value)}
                enterButton/>
            </div>
          </Header>
        </Affix>
        <Content style={{ padding: '0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={150} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
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
            <Content style={{ padding: '0', minHeight: 800 }}>
              
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