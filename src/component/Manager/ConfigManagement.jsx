import React, { Component } from 'react';
import { Form, Select, Input, Button,DatePicker,Checkbox } from 'antd';
import './ConfigManagement.css';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
export default class ConfigManagement extends Component {
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
          <Checkbox
            className="login-form-checkbox"
            // checked={this.state.checked}
            // onChange={this.onCheckBoxChange}
            >
            是否允许老师删除考试？
          </Checkbox>
          <Button type="primary" htmlType="submit" className="login-form-button">
            新建考试
          </Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}
