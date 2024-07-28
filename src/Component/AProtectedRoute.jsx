import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  } catch (error) {
    return false;
  }
};

const AProtectedRoute = ({ component: Component, ...rest }) => {
  const atoken = localStorage.getItem("atoken");
  const isAuthenticated = atoken && isTokenValid(atoken);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/alogin" />;
};

export default AProtectedRoute;
