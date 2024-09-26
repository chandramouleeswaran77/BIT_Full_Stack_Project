// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import ExpertList from './components/ExpertList/ExpertList';
import AddProfile from './components/AddProfile/AddProfile';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import AddEvent from './components/AddEvent/AddEvent'; // Import the AddEvent component
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/experts" element={<Layout><ExpertList /></Layout>} />
        <Route path="/add-profile" element={<Layout><AddProfile /></Layout>} />
        <Route path="/upcoming-events" element={<Layout><UpcomingEvents /></Layout>} />
        <Route path="/add-event" element={<Layout><AddEvent /></Layout>} /> {/* New Route for AddEvent */}
      </Routes>
    </div>
  );
}

export default App;
