import React from 'react';
import './AdminLayout.css';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../AdminSidebar';

function AdminLayout() {
  return (
    <div className='container'>
      <AdminHeader />
      <AdminSidebar />
      <Outlet/>
    </div>
  )
}

export default AdminLayout;
