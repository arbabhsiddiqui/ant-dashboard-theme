import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, Col, Flex, Row, Space, Table, Skeleton } from 'antd';

import {
  MoneyCollectFilled,
  OrderedListOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

// local imports
import { fetchActivityData, fetchUserData } from '../../utils/dataHelper';

import './Dashboard.style.scss';

const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
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

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [loadingUserData, setLoadingUserData] = useState(true);

  const [activityData, setActivityData] = useState([]);
  const [loadingActivityData, setLoadingActivityData] = useState(true);

  useEffect(() => {
    // Define an async function inside useEffect to use async/await
    const fetchUser = async () => {
      setLoadingUserData(true);
      try {
        const response = await fetchUserData();
        setUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoadingUserData(false);
      }
    };

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

    fetchUser();
    fetchActivity();
  }, []);

  return (
    <div className='p-dashboard'>
      <Row gutter={[24, 23]}>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={6}
        >
          <Card>
            <Flex className='c-card'>
              <div className='c-card__text-area'>
                <h6>Total Users</h6>
                <h1>
                  3000
                  <span className='success'>+30%</span>
                </h1>
              </div>

              <Avatar
                shape='square'
                size={50}
                icon={<UsergroupAddOutlined />}
              />
            </Flex>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={6}
        >
          <Card>
            <Flex className='c-card'>
              <div className='c-card__text-area'>
                <h6>Active Users </h6>
                <h1>
                  300
                  <span className='danger'>-30%</span>
                </h1>
              </div>

              <Avatar
                shape='square'
                size={50}
                icon={<UsergroupAddOutlined />}
              />
            </Flex>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={6}
        >
          <Card>
            <Flex className='c-card'>
              <div className='c-card__text-area'>
                <h6>Revenue</h6>
                <h1>
                  Rs 300000
                  <span className='success'>+60%</span>
                </h1>
              </div>

              <Avatar
                shape='square'
                size={50}
                icon={<MoneyCollectFilled />}
              />
            </Flex>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={6}
        >
          <Card>
            <Flex className='c-card'>
              <div className='c-card__text-area'>
                <h6>Orders</h6>
                <h1>
                  300
                  <span className='danger'>-50%</span>
                </h1>
              </div>

              <Avatar
                shape='square'
                size={50}
                icon={<OrderedListOutlined />}
              />
            </Flex>
          </Card>
        </Col>
      </Row>

      <section className='table-container'>
        <h2>Users</h2>
        <Row>
          <Col span={24}>
            {loadingUserData ? (
              <Skeleton />
            ) : (
              <Table
                columns={userColumns}
                dataSource={userData}
                pagination={{
                  position: ['none', 'none'],
                }}
              />
            )}
          </Col>
        </Row>
      </section>

      <section className='table-container'>
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
      </section>
    </div>
  );
};

export default Dashboard;
