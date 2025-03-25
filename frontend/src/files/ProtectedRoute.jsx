import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setIsAuthenticated(true);
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <>
      {isAuthenticated && children}
    </>
  );
}
export default  ProtectedRoute;
