import React from "react";
// import logo from "../images/logos/Group 1329.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirectUrl = location.state?.from || "/home";

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        history.push(redirectUrl);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__form--content">
          <h4 className="text-center mb-3">Login with</h4>
          <button className="btn-social" onClick={handleSignInWithGoogle}>
            <FcGoogle className="social-icon" /> Continue with Google
          </button>
          {/* <p>
            Don't have an account? <Link to="/register">please register..</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
