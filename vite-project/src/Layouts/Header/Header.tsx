import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { decodeToken } from "react-jwt";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);
    console.log(decoded)
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Home',
      key: 'mail',
    },
    {
      label: 'About',
      key: 'SubMenu1',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 2',
        },
      ],
    },
    {
      label: 'Account',
      key: 'SubMenu2',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 3',
        },
        {
          type: 'group',
          label: 'Item 4',
        },
      ],
    },
    {
      label: 'Login',
      onClick: () => navigate('/login'),
      key: 'SubMenu3',
      icon: <SettingOutlined />,
    },
    {
      label: 'Register',
      onClick: () => navigate('/register'),
      key: 'SubMenu4',
      icon: <SettingOutlined />,
    },
    {
        label: 'Cart',
        key: 'SubMenu5',
        icon: <SettingOutlined />,
      },
  ];

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {decoded && (
        <Link to={`/cartItem/${decoded.id}`}>Cart</Link>
      )}
    </div>
  );
};

export default Header;


