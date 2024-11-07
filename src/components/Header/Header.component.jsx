import { Layout, Breadcrumb, Space, Input, Avatar, Badge } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  SettingFilled,
  BellFilled,
} from '@ant-design/icons';

// local imports
const { Header: AntHeader } = Layout;

import './Header.style.scss';

const Header = () => {
  const handleSignIn = () => {};

  return (
    <AntHeader className='c-header'>
      <div className='c-header__title-area'>
        <Breadcrumb
          items={[
            {
              title: 'Pages',
            },
            {
              title: 'dashboard',
            },
          ]}
        />
        <h3>Dashboard</h3>
      </div>

      <div className='c-header__profile-area'>
        <Space.Compact className='search'>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder='Search'
          />
        </Space.Compact>

        <div
          className='sign-in'
          onClick={handleSignIn}
        >
          <Avatar
            className='sign-avatar'
            size={20}
            icon={<UserOutlined />}
          />{' '}
          Sign in
        </div>
        <SettingFilled className='hover' />
        <Badge
          className='hover'
          count={4}
        >
          <Avatar
            className='bell-avatar'
            icon={<BellFilled />}
          />
        </Badge>
      </div>
    </AntHeader>
  );
};

export default Header;
