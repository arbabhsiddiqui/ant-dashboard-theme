import { Card, Col, Row } from 'antd';
import RevenueTrendsChart from '../../components/RevenueTrendsChart/RevenueTrendsChart.component';
import UserActivityChart from '../../components/UserActivityChart/UserActivityChart.component';

const Report = () => {
  return (
    <div className='p-dashboard'>
      {/* chart area */}
      <Row gutter={[24, 23]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Card>
            <h2>Revenue Trends</h2>
            <RevenueTrendsChart />
          </Card>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Card>
            <h2>User Activity</h2>
            <UserActivityChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Report;
