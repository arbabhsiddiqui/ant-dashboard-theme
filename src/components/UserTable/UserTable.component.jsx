import { useEffect, useState } from 'react';
import { Card, Col, Row, Skeleton, Space, Table } from 'antd';
import { dataAtom, filterDataAtom } from '../../store/userStore';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

// local imports
import { fetchUserData } from '../../utils/dataHelper';

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
        <Link to={`/user-management/edit/${record.key}`}>Edit </Link>
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

const UserTable = () => {
  const [loadingUserData, setLoadingUserData] = useState(true);

  const [userData, setUserData] = useAtom(dataAtom);
  const [filterUserData, setFilterUserData] = useAtom(filterDataAtom);

  useEffect(() => {
    // Define an async function inside useEffect to use async/await
    const fetchUser = async () => {
      setLoadingUserData(true);
      try {
        const response = await fetchUserData();
        setUserData(response);
        setFilterUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoadingUserData(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <Card className='table-container'>
      <h2>Users</h2>
      <Row>
        <Col span={24}>
          {loadingUserData ? (
            <Skeleton />
          ) : (
            <Table
              columns={userColumns}
              dataSource={filterUserData}
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

export default UserTable;
