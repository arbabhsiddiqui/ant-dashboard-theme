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
import { fetchUserData } from '../../utils/dataHelper';
import { dataAtom, loadingAtom } from '../../store/userStore';
import { currentPageAtom, darkModeAtom } from '../../store/commonStore';
const { Header: AntHeader } = Layout;

import './Header.style.scss';
import { formatString } from '../../utils/helper';

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
  const [unFilterUserData, setUnFilterUserData] = useState([]);

  const [searchUser, setSearchUser] = useState('');

  const [userData, setUserData] = useAtom(dataAtom);
  const [loadingUserData, setLoadingUserData] = useAtom(loadingAtom);

  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useEffect(() => {
    // Define an async function inside useEffect to use async/await
    const fetchUser = async () => {
      setLoadingUserData(true);
      try {
        const response = await fetchUserData();
        setUserData(response);
        setUnFilterUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoadingUserData(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    let filteredData = unFilterUserData.filter((item) =>
      item.name.toLowerCase().includes(searchUser.toLowerCase())
    );
    setUserData(filteredData);
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
