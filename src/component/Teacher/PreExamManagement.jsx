import React, { Component } from 'react';
import { Form, Select, Input, Button,DatePicker,Checkbox,Upload,Icon,message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const Dragger = Upload.Dragger;
const props = {
  name: 'file',
  multiple: true,
  action:"//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload(){
    return true;
  }
};
export default class PreExamManagement extends Component {
  
  /**
   * 处理提交事件
   */
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }
  /**
   * 处理性别改变事件
   */
  handleSelectChange = (value) => {
    console.log(value);
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
  }
  beforeUpload(){
    return true;
  }
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功！`);
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败！`);
    }
  }
  render() {
    return (
      <div className="exam-config-container">
        <h1>新建考试</h1>
        <Form onSubmit={this.handleSubmit} className="start-exam-form">
        <FormItem
          label="考试名称"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Input placeholder="考试名称..." />
        </FormItem>
        <FormItem
          label="考试类型"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Select
            placeholder="请选择考试类型..."
            onChange={this.handleSelectChange}
          >
            <Option value="DB">数据结构</Option>
            <Option value="OS">操作系统</Option>
            <Option value="CP">编译原理</Option>
            <Option value="NetWorking">计算机网络</Option>
            <Option value="C++">C++程序设计</Option>
            <Option value="CCP">计算机组成原理</Option>
            
          </Select>
        </FormItem>
        <FormItem
          label="考生上传文件大小"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Select
            placeholder="请选择文件大小..."
            onChange={this.handleSelectChange}
          >
            <Option value="500KB">500KB</Option>
            <Option value="1MB">1MB</Option>
            <Option value="2MB">2MB</Option>
            <Option value="3MB">3MB</Option>
            <Option value="5MB++">5MB</Option>
          </Select>
        </FormItem>
        <FormItem
          label="考试时间"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
         <RangePicker
          format={dateFormat}
        />
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Dragger 
            name= 'file'
            multiple = {true}
            action = "//jsonplaceholder.typicode.com/posts/"
            onChange ={this.onChange}
            beforeUpload = {this.beforeUpload}
          >
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">将文件拖拽到此或者点击上传，文件大小不超过10kb</p>
          </Dragger>
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit" className="login-form-button">
            开启考试
          </Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}
