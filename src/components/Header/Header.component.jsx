import {
  Layout,
  Breadcrumb,
  Space,
  Input,
  Avatar,
  Badge,
  Dropdown,
} from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  AlignLeftOutlined,
  BellFilled,
  SettingOutlined,
  CloseOutlined,
} from '@ant-design/icons';

// local imports
const { Header: AntHeader } = Layout;

import './Header.style.scss';

const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    icon: <UserOutlined />,
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    key: '3',
    label: 'Logout',
    icon: <CloseOutlined />,
  },
];

const Header = ({ collapsed, setCollapsed }) => {
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
        <AlignLeftOutlined
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        <Badge
          className='hover'
          count={4}
        >
          <Avatar
            className='bell-avatar'
            icon={<BellFilled />}
          />
        </Badge>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar
              className='sign-avatar'
              size={20}
              icon={<UserOutlined />}
            />
          </a>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
