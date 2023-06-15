import { Navigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";

const ProtectedRouteUser: React.FC = ({ children }) => {
  const token = localStorage.getItem('token');
  const decodedToken: { role?: string } = decodeToken(token || "");

  if (!token || decodedToken?.role === 'admin') {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRouteUser;