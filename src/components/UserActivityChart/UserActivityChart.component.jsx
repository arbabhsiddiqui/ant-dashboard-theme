import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// local imports
const userActivityData = [
  { time: 'January', activeUsers: 1200 },
  { time: 'February', activeUsers: 1500 },
  { time: 'March', activeUsers: 1700 },
  { time: 'April', activeUsers: 1800 },
  { time: 'May', activeUsers: 2000 },
  { time: 'June', activeUsers: 2200 },
  { time: 'July', activeUsers: 2500 },
  { time: 'August', activeUsers: 2400 },
  { time: 'September', activeUsers: 2100 },
  { time: 'October', activeUsers: 2300 },
  { time: 'November', activeUsers: 2700 },
  { time: 'December', activeUsers: 3000 },
];

const UserActivityChart = () => {
  return (
    <ResponsiveContainer
      width='100%'
      height={400}
    >
      <BarChart
        data={userActivityData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip formatter={(value) => `${value} users`} />
        <Bar
          dataKey='activeUsers'
          fill='#8884d8'
          name='Active Users'
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserActivityChart;
