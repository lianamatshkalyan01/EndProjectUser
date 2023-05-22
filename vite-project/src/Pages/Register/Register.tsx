import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register} from '../../feachers/usersSlice';
import {Button, Form, Input} from 'antd';

interface User{
    first_name:string;
    last_name:string;
    email:string;
    password:string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const[user, setUser] = useState<User>({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })

  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(register(user))
  };

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const first_name: string = e.target.value;
    setUser(prevUser =>({ ...prevUser, first_name}))
  }

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const last_name:string = e.target.value;
    setUser(prevUser =>({ ...prevUser, last_name}))
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = e.target.value;
    setUser(prevUser => ({ ...prevUser, email }));
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const password: string = e.target.value;
    setUser(prevUser => ({ ...prevUser, password }));
  };


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      
    >
       <Form.Item
        name="First Name"
        label="First Name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input onChange={onFirstNameChange}/>
      </Form.Item>
      <Form.Item
        name="Last Name"
        label="Last Name"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input onChange={onLastNameChange}/>
      </Form.Item>
      
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input onChange={onEmailChange}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  onChange={onPasswordChange}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;


