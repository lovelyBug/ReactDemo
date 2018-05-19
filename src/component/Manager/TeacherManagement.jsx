import React, { Component } from 'react';
import { Table, Button,Icon } from 'antd';
import AddNewTeacher from './AddNewTeacher';
//教师列表列名标题
const columns = [{
  title: '工号',
  dataIndex: 'Tnumber',
},{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '性别',
  dataIndex: 'gender',
},{
  title: '邮箱',
  dataIndex: 'email'
},{
  title: '操作',
  dataIndex: 'action',
  render: ()=><a href=""><Icon type="minus-circle" /> 删除</a>
}
];
//列表数据源
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    Tnumber: '235687',
    name: '凌飞  ' + i,
    age: 32,
    gender: i % 2 ? '男' : '女',
    email: '******@163.com',
  });
}

export default class TeacherManagement extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedRowKeys: [],
        loading: false,
        visible: false
    };
  }
  /**
   * 点击删除按钮时触发的事件，显示loading视图1000ms，清空已选择项
   */
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  /**
   * 每次勾选/取消勾选复选框时触发的事件
   */
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  /**
   * 点击添加教师按钮，显示添加教师视图
   */
  showModal = () => {
    this.setState({ visible: true });
  }
  /**
   * 点击取消按钮，让Modal视图消失
   */
  handleCancel = () => {
    this.setState({ visible: false });
  }
  /**
   * 添加新教师
   */
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            删除
          </Button>
          <Button
            style={{float: 'right'}}
            type="primary"
            onClick={this.showModal}
          >
            添加老师
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 项` : ''}
          </span>
          <AddNewTeacher
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}