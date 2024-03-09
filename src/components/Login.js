import React from "react";
import { useState, useRef } from "react";
import classes from "./SignUp.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import SignUp from "./SignUp";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [islogin, setIslogin] = useState(true);
  const [error, setError] = useState(null);
  const switchAuthModeHandler = () => {
    setIslogin((prevState) => !prevState);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAP1-eVHrp1KJc8tPZNQOeQQDpl_LdLxdE`;
    axios
      .post(loginEndPoint, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error.message);
        } else {
          console.log("User has successfully logged in");

          localStorage.setItem("userToken", response.data.idToken);
          return <Navigate to={"/profile"} />;
        }
      })
      .catch((error) => {
        setError("Error connecting to the server");
      });
  };
  return (
    <div className={classes.container}>
      {islogin && (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            {error && <p className={classes.error}>{error}</p>}
            <div className={classes.control}>
              <label>Email:</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label>Password:</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>

            <div className={classes.actions}>
              <button>Login</button>
              <button>Forgot Password</button>
            </div>
          </form>
        </>
      )}
      <button
        type="button"
        className={classes.toggle}
        onClick={switchAuthModeHandler}
      >
        {islogin ? "Don't Have an account ? SignUp" : <SignUp />}
      </button>
    </div>
  );
};

export default Login;
