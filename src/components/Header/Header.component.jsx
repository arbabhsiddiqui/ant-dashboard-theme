import { Layout, Breadcrumb, Flex } from 'antd';

// local imports
const { Header: AntHeader } = Layout;

import './Header.style.scss';

const Header = () => {
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

      <Flex></Flex>
    </AntHeader>
  );
};

export default Header;
