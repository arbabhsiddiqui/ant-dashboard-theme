import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import {
  DatabaseFilled,
  HomeOutlined,
  SettingFilled,
  UsergroupAddOutlined,
} from '@ant-design/icons';

// local imports

import { currentPageAtom } from '../../store/commonStore';
// Define menu items array
const menuItems = [
  {
    key: '/',
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
  const location = useLocation();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useEffect(() => {
    const currentPath =
      location.pathname.length > 1
        ? location.pathname.replace(/^\//, '')
        : location.pathname;

    menuItems.map((item) => {
      if (item.key == currentPath) {
        setCurrentPage(currentPath);
      }
    });
  }, [location]);

  return (
    <Menu
      className='c-menu'
      selectedKeys={[currentPage]}
      mode={'inline'}
      items={menuItems}
    />
  );
};

export default Menus;
