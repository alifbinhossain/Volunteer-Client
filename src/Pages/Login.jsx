import React from "react";
// import logo from "../images/logos/Group 1329.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__form--content">
          <h4 className="text-center mb-3">Login with</h4>
          <button className="btn-social" onClick={signInWithGoogle}>
            <FcGoogle className="social-icon" /> Continue with Google
          </button>
          <p>
            Don't have an account? <Link to="/register">please register..</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
