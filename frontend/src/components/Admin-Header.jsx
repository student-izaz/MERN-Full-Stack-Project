import React from 'react';
import './Admin-Header.css';

function AdminHeader() {
  return (
    <header>
      <div className="header-content flex">
          <div className="logo">
              <img src="../../images/LOGO.png" alt="logo" />
          </div>
          <div className="searchBar">
              <input type="search" />
          </div>
          <div className="admin-option"></div>
      </div>
    </header>
  )
}

export default AdminHeader;
