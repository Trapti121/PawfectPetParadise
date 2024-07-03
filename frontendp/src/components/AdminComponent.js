import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminComponent = ({ children }) => {
  const auth = localStorage.getItem('adminlogins');

  if (!auth) {
    alert('You are not authorized!');
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminComponent;
