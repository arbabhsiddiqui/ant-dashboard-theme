import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'January', revenue: 4000 },
  { month: 'February', revenue: 3200 },
  { month: 'March', revenue: 5000 },
  { month: 'April', revenue: 4700 },
  { month: 'May', revenue: 5400 },
  { month: 'June', revenue: 6000 },
  { month: 'July', revenue: 6800 },
  { month: 'August', revenue: 7000 },
  { month: 'September', revenue: 6200 },
  { month: 'October', revenue: 5600 },
  { month: 'November', revenue: 5800 },
  { month: 'December', revenue: 7500 },
];

const RevenueTrendsChart = () => {
  return (
    <ResponsiveContainer
      width='100%'
      height={400}
    >
      <BarChart
        data={revenueData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar
          dataKey='revenue'
          fill='#82ca9d'
          name='Revenue'
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueTrendsChart;
