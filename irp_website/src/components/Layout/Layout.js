import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
