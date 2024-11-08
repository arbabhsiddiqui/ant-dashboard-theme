import { Avatar, Card, Flex } from 'antd';

import { UsergroupAddOutlined } from '@ant-design/icons';

// local imports
import './ProgressCard.style.scss';

const ProgressCard = ({
  title,
  progressNumber,
  progressPercent,
  isPositive,
  icon = <UsergroupAddOutlined />,
}) => {
  return (
    <Card>
      <Flex className='c-card'>
        <div className='c-card__text-area'>
          <h6>{title}</h6>
          <h1>
            {progressNumber}
            <span className={`${isPositive ? 'success' : 'danger'}`}>
              {isPositive ? '+' : '-'}
              {progressPercent}%
            </span>
          </h1>
        </div>
        <Avatar
          shape='square'
          size={50}
          icon={icon}
        />
      </Flex>
    </Card>
  );
};

export default ProgressCard;
