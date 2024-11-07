import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DatabaseFilled,
  HomeOutlined,
  SettingFilled,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

// local imports
const { Sider } = Layout;

import './SideBar.style.scss';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className='c-sidebar'
    >
      <h1>Demo </h1>
      <Menu
        defaultSelectedKeys={['home']}
        mode={'inline'}
      >
        <Menu.Item
          key='home'
          icon={<HomeOutlined />}
        >
          <Link to='/'>Dashboard</Link>
        </Menu.Item>

        <Menu.Item
          key='user-management'
          icon={<UsergroupAddOutlined />}
        >
          <Link to='/user-management'>User Management</Link>
        </Menu.Item>

        <Menu.Item
          key='reports'
          icon={<DatabaseFilled />}
        >
          <Link to='/reports'>Reports</Link>
        </Menu.Item>

        <Menu.Item
          key='settings'
          icon={<SettingFilled />}
        >
          <Link to='/settings'>Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
