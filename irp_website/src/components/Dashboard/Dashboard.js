import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome Back,</h2>
      </div>
      
      <div className="dashboard-stats">
        <div className="stats-card">
          <h3>Total No of Industry Experts</h3>
          <p>54</p>
        </div>
        <div className="stats-card">
          <h3>Total No of Events</h3>
          <p>759</p>
        </div>
        <div className="stats-card">
          <h3>Upcoming Events</h3>
          <p>54</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
