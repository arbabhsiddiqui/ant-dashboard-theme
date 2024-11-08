import { Flex, Layout, ConfigProvider, theme, Drawer } from 'antd';
import { Outlet } from 'react-router-dom';

// local imports
import Header from '..//Header/Header.component';
import SideBar from '../SideBar/SideBar.component';

import './LayoutHandler.style.scss';
import { useState } from 'react';
import Menus from '../Menus/Menus.compoent';

const LayoutHandler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

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
              isDarkMode={isDarkMode}
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
