import { Flex, Layout, ConfigProvider, theme } from 'antd';
import { Outlet } from 'react-router-dom';

// local imports
import Header from '..//Header/Header.component';
import SideBar from '../SideBar/SideBar.component';

import './LayoutHandler.style.scss';
import { useState } from 'react';

const LayoutHandler = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
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
          <SideBar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />

          <Layout>
            <Header
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              isDarkMode={isDarkMode}
              handleThemeSwitch={handleThemeSwitch}
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
