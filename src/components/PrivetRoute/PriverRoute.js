import React from "react";
import { Spinner } from "react-bootstrap";
import {  Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
