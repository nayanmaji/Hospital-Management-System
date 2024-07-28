import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (dtoken) => {
  try {
    const decodedToken = jwtDecode(dtoken);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  } catch (error) {
    return false;
  }
};

const DProtectedRoute = ({ component: Component, ...rest }) => {
  const dtoken = localStorage.getItem("dtoken");
  const isAuthenticated = dtoken && isTokenValid(dtoken);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/dlogin" />;
};

export default DProtectedRoute;
