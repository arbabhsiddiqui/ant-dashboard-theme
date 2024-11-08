import { useEffect, useState } from 'react';
import { Flex, Layout, ConfigProvider, theme, Drawer } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';

// local imports
import Header from '..//Header/Header.component';
import SideBar from '../SideBar/SideBar.component';
import Menus from '../Menus/Menus.component';
import { darkModeAtom } from '../../store/commonStore';

import './LayoutHandler.style.scss';

const LayoutHandler = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(true);
  };

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Flex
        gap='middle'
        wrap
      >
        <Layout className='c-layout'>
          <Drawer
            title='Demo'
            placement='left'
            closable={false}
            onClose={() => {
              setIsDrawerOpen(false);
            }}
            open={isDrawerOpen}
            key={'left'}
            width={250}
          >
            <Menus />
          </Drawer>
          <SideBar />

          <Layout>
            <Header
              handleDrawerToggle={handleDrawerToggle}
              handleThemeToggle={handleThemeToggle}
            />
            <main className='c-layout__content-area'>
              <Outlet />
            </main>
          </Layout>
        </Layout>
      </Flex>
    </ConfigProvider>
  );
};

export default LayoutHandler;
