import React from "react";
import { Redirect, Route } from "react-router";
import { PuffLoader } from "react-spinners";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useFirebase();

  if (loading) {
    return (
      <div
        className="spinner-box"
        style={{
          minHeight: "88vh",
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
