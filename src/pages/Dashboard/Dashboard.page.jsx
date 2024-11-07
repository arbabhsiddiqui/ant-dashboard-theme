import { Flex, Layout } from 'antd';

// local imports
import Header from '../../components/Header/Header.component';
import SideBar from '../../components/SideBar/SideBar.component';
import Main from '../../components/Main/Main.component';

import './Dashboard.style.scss';

const Dashboard = () => {
  return (
    <Flex
      gap='middle'
      wrap
    >
      <Layout className='c-layout'>
        <SideBar>Sider</SideBar>
        <Layout>
          <Header>Header</Header>
          <Main>Content</Main>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default Dashboard;
