import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { UserOutlined, LoginOutlined, ShoppingCartOutlined,MailOutlined , PhoneOutlined, ContactsOutlined ,HomeOutlined, LogoutOutlined } from '@ant-design/icons';
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
      <div style={{ display: 'flex',  height: '80px' }}>
        <Menu mode="horizontal" selectedKeys={[current]} onClick={onClick} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
          <Menu.Item key="items1" style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder' }}>
            <img
              src="https://seeklogo.com/images/P/pharmacy-logo-7092A6C9DF-seeklogo.com.png"
              style={{ width: '100%', height: '80px'}}
              alt="Example"
            />
          </Menu.Item>
          {user ? (
            <Menu.Item key="items2" icon={<HomeOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder', marginLeft:"770px"}} />} style={{marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            <Link to="/user">Home</Link>
          </Menu.Item>
          ):(
            <Menu.Item key="items3" icon={<HomeOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder',marginLeft:"850px" }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            <Link to="/">Home</Link>
          </Menu.Item>
          )}
          <Menu.Item key="items4" onClick={() => navigate('/about')} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            About
          </Menu.Item>
          <Menu.Item key="items5" onClick={() => navigate('/brands')} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
            Brands
          </Menu.Item>
          <Menu.SubMenu key="items6" title="Contact" icon={<ContactsOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              <Menu.Item key="Phone"  icon={<PhoneOutlined style={{ color: 'red', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>094-510510</Menu.Item>
              <Menu.Item key="Email" icon={<MailOutlined style={{ color: 'red', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>pharmacy@gmail.com</Menu.Item>
            </Menu.SubMenu>
          {user && (
            <Menu.Item key="items7" icon={<ShoppingCartOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              <Link to={`/cartItem/${decoded.id}`}>
                Cart
              </Link>
            </Menu.Item>
          )}
          {user ?  (
            <Menu.Item key="items8" onClick={handleLogout} icon={<LogoutOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.SubMenu key="items9" title="Account" icon={<UserOutlined style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
              <Menu.Item key="login" onClick={() => navigate('/login')} icon={<LoginOutlined style={{ color: 'red', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Login</Menu.Item>
              <Menu.Item key="register" onClick={() => navigate('/register')} icon={<LoginOutlined style={{ color: 'green', fontSize: '20px', fontWeight: 'bolder' }} />} style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>Register</Menu.Item>
            </Menu.SubMenu>
          )}
          
        </Menu>
      </div>
    </div>
  );
};

export default Header;