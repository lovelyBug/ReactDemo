import React, { Component } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const AddNewTeacher = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="添加教师"
          okText="添加"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入教师姓名！' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="年龄">
             {getFieldDecorator('age', {
                rules: [{ required: true, message: '请输入教师年龄！' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="性别" className="collection-create-form_last-form-item">
              {getFieldDecorator('sex', {
                rules: [{ required: true, message: '请选择教师性别！' }],
              })(
                <Radio.Group>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="邮箱">
             {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入教师邮箱！' }],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
export default AddNewTeacher;