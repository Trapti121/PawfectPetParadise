import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({ children }) => {
  const auth = localStorage.getItem('userlogins');
  return auth ? children : <Navigate to="/" />;
};

export default PrivateComponent;

