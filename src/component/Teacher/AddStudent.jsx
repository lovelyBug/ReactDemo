import React, { Component } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const AddStudent = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="添加学生"
          okText="添加"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="学号">
                {getFieldDecorator('age', {
                    rules: [{ required: true, message: '请输入学生学号！' }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入学生姓名！' }],
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
export default AddStudent;