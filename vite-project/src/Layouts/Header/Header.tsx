import React, { useState } from 'react';
import { Menu, Input, Modal } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { UserOutlined, LoginOutlined, ShoppingCartOutlined, SearchOutlined, PhoneOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../feachers/cartItemsSlice';
import type { MenuProps } from 'antd';
import Cart from '../../Components/Cart/Cart';

const items: MenuProps['items'] = [
  {
    label: 'Account',
    key: 'SubMenu',
    icon: <UserOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />,
    children: [
      {
        label: 'Login',
        key: 'login',
      },
      {
        label: 'Register',
        key: 'register',
      },
    ],
  },
];

const { Search } = Input;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  console.log(user, '63636363');
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);
  console.log(decoded);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const data = useSelector(getCartItems);

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Menu mode="horizontal" selectedKeys={[current]} onClick={onClick}>
          <Menu.Item key="items1" style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder' }}>
            <img
              src="https://seeklogo.com/images/P/pharmacy-logo-7092A6C9DF-seeklogo.com.png"
              style={{ width: '100%', height: '80px' }}
              alt="Example"
            />
          </Menu.Item>
          <Menu.Item key="items2" icon={<HomeOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="items3" onClick={() => navigate('/about')} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            About
          </Menu.Item>
          <Menu.Item key="items4" icon={<PhoneOutlined style={{ color: 'orange', marginLeft: '300px', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '45%', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            +374 94038885
          </Menu.Item>
          <Menu.SubMenu key="items7" title="Account"  icon={<UserOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }}/>} style={{marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px'}}>
            <Menu.Item key="login" onClick={() => navigate('/login')} icon={<LoginOutlined style={{ color: 'red', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Login</Menu.Item>
            <Menu.Item key="register" onClick={() => navigate('/register')} icon={<LoginOutlined style={{ color: 'green', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Register</Menu.Item>
          </Menu.SubMenu>
          {user && (
            <Menu.Item key="items8" onClick={showModal} icon={<ShoppingCartOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              <Link to={`/cartItem/${decoded.id}`}>
                Cart
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
      <div>
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ width: 900, marginLeft: '300px', marginTop: '15px', marginBottom: '20px' }}
        />
      </div>
      <Modal
        visible={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Cart />
      </Modal>
    </div>
  );
};

export default Header;


