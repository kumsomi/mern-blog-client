import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const Signup = () => {
  const initialUserDetails = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialUserDetails);

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/auth/signup", {
        // Use axios.post instead of fetch
        firstName,
        lastName,
        email,
        password,
      });
      // const res = await fetch("http://localhost:4000/auth/signup", {
      //   method: "POST",
      //   body: JSON.stringify({ firstName, lastName, email, password }),
      //   headers: { "Content-Type": "application/json" },
      // });
      if (res.status === 200) {
        console.log("response: ", res);
        console.log("posted the user");
      } else {
        console.log("registration failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const formInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const { firstName, lastName, email, password } = formData;
  return (
    <div className="login-page">
      <form onSubmit={signupHandler} className="form-container">
        <h1>User Signup</h1>
        <input
          type="firstName"
          name="firstName"
          placeholder="firstName"
          className="form-inputs"
          value={firstName}
          onChange={formInputChange}
        />
        <input
          type="lastName"
          name="lastName"
          placeholder="lastName"
          className="form-inputs"
          value={lastName}
          onChange={formInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-inputs"
          value={email}
          onChange={formInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-inputs"
          value={password}
          onChange={formInputChange}
        />
        <input type="submit" value="Sign up" className="form-inputs" />
        <Link to="/login">Already have an account</Link>
      </form>
    </div>
  );
};
