import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({ children }) => {
  const auth = localStorage.getItem('userlogins');
  const auth2= localStorage.getItem('adminlogins');
  if (auth || auth2) {
   return children;
  }
  else{
  alert('Please Login!');
  return <Navigate to="/" />;
  }
};

export default PrivateComponent;
