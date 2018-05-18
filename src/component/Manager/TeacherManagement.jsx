import React, { Component } from 'react';
import { Table, Button } from 'antd';
import AddNewTeacher from './AddNewTeacher';
const columns = [{
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
  render: ()=><a href="">删除</a>
}
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
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
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        visible: false
    };
  }
  
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
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
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
            loading={loading}
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