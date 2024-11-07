import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

// local imports
import Header from '..//Header/Header.component';
import SideBar from '../SideBar/SideBar.component';

import './LayoutHandler.style.scss';

const LayoutHandler = () => {
  return (
    <Flex
      gap='middle'
      wrap
    >
      <Layout className='c-layout'>
        <SideBar />
        <Layout>
          <Header />
          <main className='c-layout__content-area'>
            <Outlet />
          </main>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default LayoutHandler;
