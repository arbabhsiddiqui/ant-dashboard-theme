import { Layout } from 'antd';

// local imports
const { Sider } = Layout;

import Menus from '../Menus/Menus.component';

import './SideBar.style.scss';

const SideBar = () => {
  return (
    <Sider
      width={270}
      className='c-sidebar'
      collapsedWidth='0'
      trigger={null}
    >
      <div className='c-sidebar__container'>
        <div className='c-sidebar__title-area'>
          <h1>Demo</h1>
        </div>
        <Menus />
      </div>
    </Sider>
  );
};

export default SideBar;
