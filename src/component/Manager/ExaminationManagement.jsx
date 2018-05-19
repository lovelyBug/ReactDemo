import React, { Component } from 'react';
import { Table, Badge, Menu, Dropdown, Icon,Progress } from 'antd';

const expandedRowRender = () => {
    //内层学生信息标题
    const columns = [
      { title: '学号', dataIndex: 'Snumber', key: 'Snumber' },
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '提交时间', dataIndex: 'date', key: 'date'}, 
      { title: '提交状态', dataIndex: 'commitStatus', key: 'commitStatus' },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <a href="#"><Icon type="exclamation-circle" /> 提醒提交</a>
        ),
      },
    ];
    ///内层学生信息数据
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        Snumber: '1510243569',
        name: '常凌飞',
        date: '2014-12-24 23:12:00',
        commitStatus: i % 2 ? '已提交' : '未提交',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
      />
    );
  };
  //外层考试信息标题
  const columns = [
    { title: '考试类型', dataIndex: 'type', key: 'name' },
    { title: '考试名称', dataIndex: 'name', key: 'type' },
    { title: '考试日期', dataIndex: 'date', key: 'date' },
    { title: '创建者', dataIndex: 'creator', key: 'creator' },
    { title: '监考老师', dataIndex: 'listener', key: 'listener' },
    { title: '提交比例', key: 'commitRate',render:()=><Progress type="circle" percent={80} width={50} /> },
    { title: '操作', key: 'operation', render: () => <a href=""><Icon type="minus-circle" /> 删除考试</a> },
  ];
  //外层考试信息数据
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i,
      type: '期末考试',
      name: '数据结构',
      date: '2014-12-24',
      creator: 'CLF',
      listener: '常凌飞',
    });
  }
export default class ExaminationManagement extends Component{
    render(){
        return (
            <Table
              className="components-table-demo-nested"
              columns={columns}
              expandedRowRender={expandedRowRender}
              dataSource={data}
            />
      );
    }
}
