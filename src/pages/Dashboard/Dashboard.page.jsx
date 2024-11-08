import { Card, Col, Row } from 'antd';

// local imports
import RevenueTrendsChart from '../../components/RevenueTrendsChart/RevenueTrendsChart.component';
import UserActivityChart from '../../components/UserActivityChart/UserActivityChart.component';
import UserTable from '../../components/UserTable/UserTable.component';
import ProgressContainer from '../../components/ProgressContainer/ProgressContainer.component';
import RecentActivitiesTable from '../../components/RecentActivitiesTable/RecentActivitiesTable.component';

import './Dashboard.style.scss';

const Dashboard = () => {
  return (
    <div className='p-dashboard'>
      {/* progress cards area */}
      <ProgressContainer />

      {/* user table area */}
      <UserTable />

      {/* chart area */}
      <Row gutter={[24, 23]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
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
          lg={12}
          xl={12}
        >
          <Card>
            <h2>User Activity</h2>
            <UserActivityChart />
          </Card>
        </Col>
      </Row>

      {/* Recent Activities table area */}
      <RecentActivitiesTable />
    </div>
  );
};

export default Dashboard;
