import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register} from '../../feachers/usersSlice';
import {Button, Form, Input, Avatar} from 'antd';
import { AppDispatch } from '../../app/store';
import {useNavigate} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

interface Users{
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

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const[user, setUser] = useState<Users>({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })

  const dispatch: AppDispatch = useDispatch();

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(register({user}));
        navigate('/login');
      })
      .catch((errorInfo) => {
        console.log(errorInfo)
      });
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
    <div style={{height: '100vh',backgroundImage: 'url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg")', backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <div>
      <Avatar style={{marginLeft:'50%', marginTop:"10%"}} size={64} icon={<UserOutlined />} />
      </div>
      <div style={{marginLeft:"28%", marginTop:"2%"}}>
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
        name="first_name"
        label="First Name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input onChange={onFirstNameChange}/>
      </Form.Item>
      <Form.Item
        name="last_name"
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
      <Link to={'/login'}>
       <p style={{ color:"black", fontSize:"16px"}}> Don't have an account? Sign Up </p>
        </Link>
        <Button type="primary" htmlType="submit" style={{marginLeft:"35%", marginTop:"5%"}}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Register;


