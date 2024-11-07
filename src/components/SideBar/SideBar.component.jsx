import { useState } from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// local imports
const { Sider } = Layout;

import './SideBar.style.scss';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      className='c-sidebar'
    >
      <Button
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        SideBar
      ></Button>
    </Sider>
  );
};

export default SideBar;
