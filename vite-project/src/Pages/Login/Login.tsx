import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../feachers/usersSlice';
import { Button, Checkbox, Form, Input } from 'antd';
import { AppDispatch } from '../../app/store';
import {useNavigate} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { Avatar} from 'antd';
import {Link} from "react-router-dom"


interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: '',
    password: ''
  });

  const dispatch: AppDispatch = useDispatch();

  const onFinish = () => {
    dispatch(login({user}));
    setTimeout(() => {
      window.location.reload();
    }, 500); 
    navigate('/user');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = e.target.value;
    setUser(prevUser => ({ ...prevUser, email }));
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password: string = e.target.value;
    setUser(prevUser => ({ ...prevUser, password }));
  };

  return (
    <div style={{height: '100vh',backgroundImage: 'url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg")', backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
    <div>
    <Avatar style={{marginLeft:'50%', marginTop:"10%"}} size={64} icon={<UserOutlined />} />
    </div>
    <div style={{marginLeft:"28%", marginTop:"2%"}}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input onChange={onEmailChange}/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={onPasswordChange}/>
          </Form.Item>

          <Link to={'/register'}>
       <p style={{marginLeft:"35%", color:"black", fontSize:"16px"}}> Don't have an account? Sign Up </p>
        </Link>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{marginLeft:"35%", marginTop:"5%"}}>
              Login
            </Button>
          </Form.Item>
        </Form>
        
        </div>
    </div>
  );
};

export default Login;
