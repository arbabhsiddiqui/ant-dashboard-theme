import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DatabaseFilled,
  HomeOutlined,
  SettingFilled,
  UsergroupAddOutlined,
} from '@ant-design/icons';

// local imports

// Define menu items array
const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link to='/'>Dashboard</Link>,
  },
  {
    key: 'user-management',
    icon: <UsergroupAddOutlined />,
    label: <Link to='/user-management'>User Management</Link>,
  },
  {
    key: 'reports',
    icon: <DatabaseFilled />,
    label: <Link to='/reports'>Reports</Link>,
  },
  {
    key: 'settings',
    icon: <SettingFilled />,
    label: <Link to='/settings'>Settings</Link>,
  },
];

import './Menus.style.scss';

const Menus = () => {
  return (
    <Menu
      className='c-menu'
      defaultSelectedKeys={['home']}
      mode={'inline'}
      items={menuItems}
    />
  );
};

export default Menus;
