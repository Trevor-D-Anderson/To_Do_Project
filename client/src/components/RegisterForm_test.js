
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
  
  const [confirmReg, setConfirmReg] = useState("");
  const [errors, setErrors] = useState({});

  // saving form inputs
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/users/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setConfirmReg("Thank you for Registering, Proceed to Login!");
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
      {confirmReg ? <h4 className="text-center">{confirmReg}</h4> : null}
      <form onSubmit={register}>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.firstName ? (
            <div className="alert alert-danger my-1">
              {errors.firstName.message}
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.lastName ? (
            <div className="alert alert-danger my-1">
              {errors.lastName.message}
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.email ? (
            <div className="alert alert-danger my-1">
              {errors.email.message}
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.password ? (
            <div className="alert alert-danger my-1">
              {errors.password.message}
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.confirmPassword ? (
            <div className="alert alert-danger my-1">
              {errors.confirmPassword.message}
            </div>
          ) : null}
        </div>
        <input
          className=" btn-outline-primary mb-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default RegisterForm;