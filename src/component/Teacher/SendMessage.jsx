import React, { Component } from 'react';
import { Modal, Form, Input, Radio,message } from 'antd';
const FormItem = Form.Item;

const SendMessage = Form.create()(
  class extends Component {
    constructor(props){
        super(props);
        this.state={
            messages : '',
        }
    }
  /**
   * 输入信息时触发的事件
   */
  handleInput = (e) => {
    let inputValue = e.target.value;
    this.setState({ messages: inputValue });
  }
  /**
   * 点击登陆时触发的事件
   */
  handleSubmit = (e) => {
    const { messages } = this.state;
    if(messages === ''){
      message.warning('信息不能为空！');
      return;
    }else{
      message.success('信息发送成功！');
      this.setState({messages: ''}); 
      this.props.onCancel();
    }
  }
    render() {
      const { visible, onCancel, handleCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="发送通知"
          okText="添加"
          cancelText="取消"
          onCancel={onCancel}
          onOk={this.handleSubmit}
        >
          <Form layout="vertical">
            <FormItem label="发送内容">
                {getFieldDecorator('content', {
                    rules: [{ required: true, message: '请输入要发送的信息！' }],
                })(
                    <Input
                        placeholder="密码"
                        onChange={this.handleInput}
                     />
                )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
export default SendMessage;