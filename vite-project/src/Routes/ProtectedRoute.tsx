import { Navigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { ReactNode } from 'react';
import {useState} from 'react'

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    const user = localStorage.getItem('user') || null;

    const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);
    console.log(decoded.role, "useeeeeeerrrrr")

  if (!decoded) {
    return <Navigate to="/" />;
  }

  if (decoded?.role === 'admin') {
    
    return <>{children}</>;
  } else {
    return <Navigate to="/user" />;
  }
};

export default ProtectedRoute;
