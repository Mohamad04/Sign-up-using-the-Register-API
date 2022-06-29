import React from "react";
import { Route } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return Auth.isAuthenticated() === true
          ? children
          : (window.location.href = "http://localhost:3000/");
      }}
    >
    </Route>
  );
};

export default ProtectedRoute;
