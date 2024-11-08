import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

// local imports
import Header from '..//Header/Header.component';
import SideBar from '../SideBar/SideBar.component';

import './LayoutHandler.style.scss';
import { useState } from 'react';

const LayoutHandler = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
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
          />
          <main className='c-layout__content-area'>
            <Outlet />
          </main>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default LayoutHandler;
