import { Layout } from 'antd';

// local imports
const { Header: AntHeader } = Layout;

import './Header.style.scss';

const Header = () => {
  return (
    <AntHeader className='c-header'>
      <h1 className='text-light'>Header</h1>
    </AntHeader>
  );
};

export default Header;
