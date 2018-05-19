import React, { Component } from 'react';
import { Layout,Menu,Icon,Input,Avatar,Affix,Dropdown,message } from 'antd';
import './Home.css';
import { Redirect,NavLink,Switch,Route } from 'react-router-dom';
import MyCookies from '../../cookie/MyCookies';
import ConfigManagement from '../../component/Manager/ConfigManagement';
import TeacherManagement from '../../component/Manager/TeacherManagement';
import ExaminationManagement from '../../component/Manager/ExaminationManagement';
import PreExamManagement from '../../component/Teacher/PreExamManagement';
import ExamManagement from '../../component/Teacher/ExamManagement';

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
    message.config({
      top: 100,
      duration: 1,
      maxCount: 3
    });
  }
  /**
   * 生命周期函数，初始加载页面时执行的方法，依据session和cookie进行用户信息的判断，是否重定向至登录界面
   */
  componentWillMount(){
    if(sessionStorage.getItem("name") !== null || MyCookies.getCookie('name').length !== 0){
      this.setState({
        isToLogin: false,
        userName: MyCookies.getCookie('name') || sessionStorage.getItem("name")
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
    sessionStorage.removeItem("name");
    this.setState({
      isToLogin: true,
    });
  }
  managerNavigation(){
    return(
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',float: 'left'}}
      >
        <Menu.Item key="1"><NavLink to='/home/em'>考试管理</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to='/home/tm'>教师管理</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to='/home/cm'>配置管理</NavLink></Menu.Item>
      </Menu>
    );
  }
  teacherNavigation(){
    return(
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',float: 'left'}}
      >
        <Menu.Item key="1"><NavLink to='/home/tsm'>考前管理</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to='/home/tem'>考中管理</NavLink></Menu.Item>
        <Menu.Item key="3">考后管理</Menu.Item>
      </Menu>
    );
  }
  studentNavigation(){
    return(
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',float: 'left'}}
      >
        <Menu.Item key="1">试卷下载</Menu.Item>
        <Menu.Item key="2">答案上传</Menu.Item>
        <Menu.Item key="3">查看文件</Menu.Item>
      </Menu>
    );
  }
  selectNavigation(){
    if(this.state.userName[0] === 'a'){
      return(
        this.managerNavigation()
      );
    }else if(this.state.userName[0] === 't'){
      return(
        this.teacherNavigation()
      );
    }else{
      return(
        this.studentNavigation()
      );
    }
  }
  siderView(){
    return(
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
    )
  }
  userInfoView(){
    return(
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
    )
  }
  searchInfoView(){
    return(
      <Search
        placeholder="输入搜索信息..."
        onSearch={value => alert(value)}
        enterButton/>
    )
  }
  render() {
    if(this.state.isToLogin){
      return(
        <Redirect push to="/login" />
      );
    }
    return (
      <Layout>
        <Affix>
          <Header className="header">
            <div className="logo-text" >Computer Examination</div>
            <div className="user-info" >
              {this.userInfoView()}
            </div>
            {this.selectNavigation()}
            <div className="search-input" >
              {this.searchInfoView()}
            </div>
          </Header>
        </Affix>
        <Content style={{ padding: '0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            {this.siderView()}
            <Content style={{ padding: '0', minHeight: 800 }}>
              <Switch>
                <Route exact  path='/home/atm' component={TeacherManagement} />
                <Route path='/home/acm' component={ConfigManagement} />
                <Route path='/home/aem' component={ExaminationManagement} />
                <Route path='/home/tsm' component={ConfigManagement} />
                <Route path='/home/tem' component={ExamManagement} />
                <Route component={ConfigManagement} />
            </Switch>
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