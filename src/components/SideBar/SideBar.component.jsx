import { Button, Layout, Menu } from 'antd';
import {
  DatabaseFilled,
  HomeOutlined,
  SettingFilled,
  UsergroupAddOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

// local imports
const { Sider } = Layout;

import './SideBar.style.scss';

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

const SideBar = ({ collapsed, setCollapsed }) => {
  return (
    <>
      <Sider
        width={230} // Custom width for expanded state
        collapsed={collapsed}
        className={`c-sidebar ${collapsed ? 'collapsed' : ''}`}
        breakpoint='lg'
        collapsedWidth={0}
      >
        <div className='c-sidebar__container'>
          <div className='c-sidebar__title-area'>
            <h1>Demo</h1>
            <Button
              color='danger'
              variant='outlined'
              size='small'
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className='collapsed-button'
            >
              <CloseOutlined className='collapsed-icon' />
            </Button>
          </div>

          <Menu
            defaultSelectedKeys={['home']}
            mode={'inline'}
            items={menuItems}
          />
        </div>
      </Sider>
    </>
  );
};

export default SideBar;
