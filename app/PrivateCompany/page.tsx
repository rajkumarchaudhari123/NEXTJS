import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Page = () => {
  const auth = localStorage.getItem('user');

  // If no 'user' is found in localStorage, redirect to signup page
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default Page;
