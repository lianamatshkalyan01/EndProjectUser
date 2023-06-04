import React from 'react';
import { Menu, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { UserOutlined, LoginOutlined, ShoppingCartOutlined, SearchOutlined, PhoneOutlined, HomeOutlined  } from '@ant-design/icons';

const { Search } = Input;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const decoded: any = user ? decodeToken(JSON.parse(user)?.jwt) : null;
  console.log(decoded);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', backgroundColor:'grey' }}>
        <Menu mode="horizontal">
          <Menu.Item key="items1" style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder' }} >
          <img
            src={`https://seeklogo.com/images/P/pharmacy-logo-7092A6C9DF-seeklogo.com.png`}
           style={{ width: '100%', height: '80px' }}
           alt="Example"
            />
          </Menu.Item>
          <Menu.Item key="items2" onClick={() => navigate('/')} icon={<HomeOutlined style={{ color: 'orange', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'  }}>
            Home
          </Menu.Item>
          <Menu.Item key="items3" onClick={() => navigate('/about')} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'  }}>
            About
          </Menu.Item>
          <Menu.Item key="items4" icon={<PhoneOutlined style={{ color: 'orange', marginLeft: '300px', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'   }}>
            +374 94038885
          </Menu.Item>
          <Menu.Item key="items5" onClick={() => navigate('/login')} icon={<LoginOutlined style={{ color: 'red', marginLeft: '200px', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'   }}>
            Login
          </Menu.Item>
          <Menu.Item key="items6" onClick={() => navigate('/register')} icon={<LoginOutlined style={{ color: 'green', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'   }}>
            Register
          </Menu.Item>
          <Menu.Item key="items7" icon={<UserOutlined style={{ color: 'orange', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'  }}>
            Account
          </Menu.Item>
          <Menu.Item key="items8" onClick={() => navigate(`/cartItem/${decoded.id}`)} icon={<ShoppingCartOutlined style={{ color: 'orange', fontSize:'20px', fontWeight:'bolder' }} />} style={{ marginRight: '10px', fontSize:'20px', fontWeight:'bolder', marginTop:'20px'   }}>
            Cart
          </Menu.Item>
        </Menu>
      </div>
      <div>
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ width: 900, marginLeft:'250px', marginTop:'15px', marginBottom:'20px' }}
        />
      </div>
    </div>
  );
};

export default Header;


