import { Col, Row } from 'antd';

import { MoneyCollectFilled, OrderedListOutlined } from '@ant-design/icons';

import ProgressCard from '../ProgressCard/ProgressCard.component';

const ProgressContainer = () => {
  return (
    <Row gutter={[24, 23]}>
      {/* item */}
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={6}
      >
        <ProgressCard
          title='Total Users'
          progressNumber='3000'
          isPositive={false}
          progressPercent='30'
        />
      </Col>
      {/* item */}
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={6}
      >
        <ProgressCard
          title='Active Users'
          progressNumber='300'
          isPositive={false}
          progressPercent='30'
        />
      </Col>
      {/* item */}
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={6}
      >
        <ProgressCard
          title='Revenue'
          progressNumber='Rs 300000'
          isPositive={true}
          progressPercent='60'
          icon={<MoneyCollectFilled />}
        />
      </Col>
      {/* item */}
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={6}
      >
        <ProgressCard
          title='Orders'
          progressNumber='300'
          isPositive={false}
          progressPercent='50'
          icon={<OrderedListOutlined />}
        />
      </Col>
    </Row>
  );
};

export default ProgressContainer;
