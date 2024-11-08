const activityData = [
  {
    key: '1',
    name: 'John Brown',
    role: 'user',
    activity: 'login',
    date: '28-10-2024',
  },
  {
    key: '2',
    name: 'Jim Green',
    role: 'admin',
    activity: 'update product',
    date: '28-10-2024',
  },
  {
    key: '3',
    name: 'Jim Green',
    role: 'admin',
    activity: 'update order',
    date: '28-10-2024',
  },
];

const userData = [
  {
    key: '1',
    name: 'John Brown',
    email: 'Jhone@gmail.com',
    status: 'active',
    role: 'user',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'Jim@gmail.com',
    status: 'active',
    role: 'admin',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'Joe@gmail.com',
    status: 'inactive',
    role: 'admin',
  },
];

// Functions to simulate an API call

export const fetchUserData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 2000); // 2-second delay to simulate an API response
  });

export const fetchActivityData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(activityData);
    }, 4000); // 4-second delay to simulate an API response
  });
