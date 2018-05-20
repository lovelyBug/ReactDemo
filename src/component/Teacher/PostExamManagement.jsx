import React, { Component } from 'react';
import { Table, Icon, Progress,Button,message } from 'antd';
import AddStudent from './AddStudent';
import SendMessage from './SendMessage';
const data = [];
export default class PostExamManagement extends Component{
    constructor(props){
        super(props);
        this.state={
            addStudentVisible: false,
            sendMessageVisible: false,
        }
        //外层考试信息数据
        for (let i = 0; i < 5; ++i) {
            data.push({
            key: i,
            type: '期末考试',
            name: '数据结构',
            date: '2014-12-24',
            status: '已结束',
            listener: '常凌飞',
            });
        }
    }
    //内层学生信息标题
    expandedRowRender = () => {
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
                <Button
                    onClick={()=>{message.success('已提醒！');}}
                >
                    <Icon type="download" /> 下载试卷
                </Button>
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
            date: i % 2 ? '2014-12-24 23:12:00' : '',
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
    columns = [
        { title: '考试类型', dataIndex: 'type', key: 'name' },
        { title: '考试名称', dataIndex: 'name', key: 'type' },
        { title: '考试日期', dataIndex: 'date', key: 'date' },
        { title: '状态', dataIndex: 'status', key: 'status' },
        { title: '监考老师', dataIndex: 'listener', key: 'listener' },
        { title: '提交比例', key: 'commitRate',render:()=><Progress type="circle" percent={96} width={50} /> },
        { title: '发送通知', key: 'operation', render: () => (
            <Button
            onClick={()=>{message.success('下载试卷！');}}
            >
                <Icon type="download" />
                 下载试卷
            </Button>
            
        )},
        { title: '添加学生', key: 'operation1', render: () => (
            <Button
            onClick={()=>{message.success('导出信息！');}}
            >
                <Icon type="export" /> 导出信息
            </Button>
        )},
        { title: '结束考试', key: 'operation3', render: () => (
            <Button
                onClick={()=>{message.success('已经清理考试！');}}
            >
                <Icon type="close-circle" /> 清理考试
            </Button>
        )}
    ];
    render(){
        return (
            <div>
                <Table
                    className="components-table-demo-nested"
                    columns={this.columns}
                    expandedRowRender={this.expandedRowRender}
                    dataSource={data}
                />
            </div>
      );
    }
}
