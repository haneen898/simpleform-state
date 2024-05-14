import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <p>Your password is: {user.password}</p>
    </div>
  );
};

export default Dashboard;