import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [error, setError] = useState(null);

  const handleSignup = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const signupEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAP1-eVHrp1KJc8tPZNQOeQQDpl_LdLxdE`;

    axios
      .post(signupEndpoint, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error.message);
        } else {
          console.log("User has successfully signed up");
          setError(null);
        }
      })
      .catch((error) => {
        setError("Error connecting to the server");
      });
  };

  return (
    <div className={classes.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <div className={classes.control}>
          <label>Confirm Password:</label>
          <input type="password" required ref={confirmPasswordInputRef} />
        </div>

        <div className={classes.actions}>
          <button>SignUp</button>

          <button type="button" className={classes.toggle}>
            Have an account ? Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
