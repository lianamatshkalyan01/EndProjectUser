import React, { useState } from 'react';
import { Menu, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { UserOutlined, LoginOutlined, ShoppingCartOutlined, SearchOutlined, PhoneOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

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
const[user, setUser] = useState(localStorage.getItem('user') || null);
  const navigate = useNavigate();
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setCurrent('login');
    navigate('/')
  };


  console.log(user, '99999999999999999999')
  console.log(decoded, "555555555555555555555")

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
          {user ?  (
            <Menu.Item key="items7" onClick={handleLogout} icon={<LogoutOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.SubMenu key="items7" title="Account" icon={<UserOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              <Menu.Item key="login" onClick={() => navigate('/login')} icon={<LoginOutlined style={{ color: 'red', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Login</Menu.Item>
              <Menu.Item key="register" onClick={() => navigate('/register')} icon={<LoginOutlined style={{ color: 'green', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Register</Menu.Item>
            </Menu.SubMenu>
          )}
          {user && (
            <Menu.Item key="items8" icon={<ShoppingCartOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
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
    </div>
  );
};

export default Header;