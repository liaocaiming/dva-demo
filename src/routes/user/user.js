import React from 'react';

import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import Rx from 'rxjs/Rx'

var subject = new Rx.ReplaySubject(2); // 为新的订阅者缓冲3个值

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(5);

@connect((state) => { return { state, user: state.user}})
@Form.create({})
export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPassword: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPassword = this.renderPassword.bind(this)
  }

  componentWillMount() {
    // var subject = new Rx.Subject();

    // subject.subscribe({
    //   next: (v) => console.log('observerA: ' + v)
    // });
    // subject.subscribe({
    //   next: (v) => console.log('observerB: ' + v)
    // });

    // subject.next(1);
    // subject.next(2);
    // var source = Rx.Observable.from([1, 2, 3]);
    // var subject = new Rx.Subject();
    // var multicasted = source.multicast(subject);

    // // 在底层使用了 `subject.subscribe({...})`:
    // multicasted.subscribe({
    //   next: (v) => console.log('observerA: ' + v)
    // });
    // multicasted.subscribe({
    //   next: (v) => console.log('observerB: ' + v)
    // });

    // 在底层使用了 `source.subscribe(subject)`:
    // multicasted.connect();
  }
  renderPassword(getFieldDecorator) {

    if (this.state.isShowPassword) {
      return (
        <FormItem style={{ display: this.state.isShowPassword ? 'block' : 'none' }}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
      )
    } else {
      return (
        <FormItem>
          <Button type="primary" className="login-form-button">show</Button>
        </FormItem>
      )
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
        </FormItem>
        {this.renderPassword(getFieldDecorator)}
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>

        <FormItem>
          <Button type="primary" className="login-form-button" onClick={(e) => { e.preventDefault(); this.setState({ isShowPassword: !this.state.isShowPassword }) }}>
            show
        </Button>
        </FormItem>

      </Form>
    );
  }
}


// export default connect((state => { return { user: state.user } }))(Form.create()(User))