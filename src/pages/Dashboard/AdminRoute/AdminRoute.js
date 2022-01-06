import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin } = useAuth();
  const location = useLocation();

//   Loading Spinner
  const loading = useSelector((state) => state.entities.user.loading);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div  className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!user.email && !admin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
