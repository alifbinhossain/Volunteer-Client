import React from "react";
import { Redirect, Route } from "react-router";
import { PuffLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        className="private-route-pre-loader-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#9fe6a0",
        }}
      >
        <PuffLoader color="#4aa96c" size={50} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
