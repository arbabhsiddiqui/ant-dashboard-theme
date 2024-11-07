import { Avatar, Card, Col, Flex, Row, Space, Table, Tag } from 'antd';

import {
  MoneyCollectFilled,
  OrderedListOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './Dashboard.style.scss';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag
              color={color}
              key={tag}
            >
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Dashboard = () => {
  return (
    <Space
      size='large'
      direction='vertical'
      className='p-dashboard'
    >
      <Row gutter={16}>
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={6}>
          <Card>
            <Flex className='c-card'>
              <div className='c-card__text-area'>
                <h6>Orders</h6>
                <h1>
                  300
                  <span className='danger'>+50%</span>
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
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default Dashboard;
