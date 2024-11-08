import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import {
  Layout,
  Breadcrumb,
  Space,
  Input,
  Avatar,
  Badge,
  Dropdown,
  Button,
} from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  AlignLeftOutlined,
  BellFilled,
  SettingOutlined,
  CloseOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';

// local imports
import { dataAtom, filterDataAtom } from '../../store/userStore';
import { currentPageAtom, darkModeAtom } from '../../store/commonStore';
const { Header: AntHeader } = Layout;

import { formatString } from '../../utils/helper';

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

const Header = ({ handleDrawerToggle, handleThemeToggle }) => {
  const [searchUser, setSearchUser] = useState('');

  const [userData, setUserData] = useAtom(dataAtom);
  const [filterUserData, setFilterUserData] = useAtom(filterDataAtom);
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useEffect(() => {
    let filteredData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchUser.toLowerCase())
    );
    setFilterUserData(filteredData);
  }, [searchUser]);

  return (
    <AntHeader className='c-header'>
      <div className='c-header__title-area'>
        <Button onClick={handleDrawerToggle}>
          <AlignLeftOutlined />
        </Button>

        <div className='title'>
          <Breadcrumb
            items={[
              {
                title: 'Pages',
              },
              {
                title:
                  currentPage === '/' || currentPage === ''
                    ? 'dashboard'
                    : currentPage,
              },
            ]}
          />
          <h3>
            {currentPage === '/' || currentPage === ''
              ? 'Dashboard'
              : formatString(currentPage)}
          </h3>
        </div>
      </div>

      <div className='c-header__profile-area'>
        <Space.Compact className='search'>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder='Search'
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
          />
        </Space.Compact>

        <MoonOutlined
          onClick={() => handleThemeToggle()}
          className={`${!isDarkMode ? 'd-none' : ''}`}
        />
        <SunOutlined
          onClick={() => handleThemeToggle()}
          className={`${isDarkMode ? 'd-none' : ''}`}
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
          <UserOutlined />
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
