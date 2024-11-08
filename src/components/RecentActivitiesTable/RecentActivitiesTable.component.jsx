import { useEffect, useState } from 'react';
import { Card, Col, Row, Skeleton, Space, Table } from 'antd';
import { Link } from 'react-router-dom';

// local imports
import { fetchActivityData } from '../../utils/dataHelper';

const activityColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
  },
  {
    title: 'Activity',
    dataIndex: 'activity',
    key: 'activity',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Link to={`user-management/edit/${record.key}`}>Edit </Link>
        <span
          className='text-danger hover'
          onClick={() => {
            console.log(record.key);
          }}
        >
          Delete
        </span>
      </Space>
    ),
  },
];

const RecentActivitiesTable = () => {
  const [activityData, setActivityData] = useState([]);
  const [loadingActivityData, setLoadingActivityData] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoadingActivityData(true);
      try {
        const response = await fetchActivityData();
        setActivityData(response);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      } finally {
        setLoadingActivityData(false);
      }
    };

    fetchActivity();
  }, []);

  return (
    <Card className='table-container'>
      <h2>Recent Activities</h2>
      <Row>
        <Col span={24}>
          {loadingActivityData ? (
            <Skeleton />
          ) : (
            <Table
              columns={activityColumns}
              dataSource={activityData}
              pagination={{
                position: ['none', 'none'],
              }}
            />
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default RecentActivitiesTable;
