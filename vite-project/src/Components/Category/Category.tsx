// import { useEffect} from 'react'
// import { useDispatch} from 'react-redux'
// import { AppDispatch } from '../../app/store'

// interface Category{
//     name: string;
//     img: string;
// }

// const Category : React.FC = ()=>{
//  const {products} = use
// }



// export default Category

// const { products } = useSelector((state) => getProducts(state));
//   const dispatch = useDispatch();

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../feachers/usersSlice';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { AppDispatch } from '../../app/store';



// const Login: React.FC = () => {
//   const [user, setUser] = useState<User>({
//     email: '',
//     password: ''
//   });

//   const dispatch: AppDispatch = useDispatch();

//   const onFinish = () => {
//     dispatch(login(user));
//   };
  

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

//   const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const email: string = e.target.value;
//     setUser(prevUser => ({ ...prevUser, email }));
//   };

//   const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
//     const password: string = e.target.value;
//     setUser(prevUser => ({ ...prevUser, password }));
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
//         <div style={{ width: 400 }}>
//     <Form
//       name="basic"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       style={{ maxWidth: 600 }}
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[{ required: true, message: 'Please input your email!' }]}
//       >
//         <Input onChange={onEmailChange}/>
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password onChange={onPasswordChange}/>
//       </Form.Item>

//       <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Login
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//     </div>
//   );
// };

// export default Login;
