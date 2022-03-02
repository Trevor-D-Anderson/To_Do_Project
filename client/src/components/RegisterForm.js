import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
  const [confirmReg, setConfirmReg] = useState("");
  const [errors, setErrors] = useState({});

  const [email_login, setEmail_login] = useState("");
  const [password_login, setPassword_login] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // saving form inputs
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // for Login
  //will comment this, as I'm not passing email via props, but instead from below
  //const { setUserEmail } = props;
  const navigate = useNavigate();

  // For Registration
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //For Registration Portion
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
        setErrors({});
        axios
          .post(
            "http://localhost:8000/api/users/login",
            {
              email: user.email,
              password: user.password,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("response: ", res);
            //setUserEmail(email_login);
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userId", res.data.user._id);
            navigate("/profile");
          })
          .catch((err) => {
            console.log(err.res.data);
            //console.log(err);
            setErrorMessage(err.res.data.message);
            //setErrorMessage(err.res.data.errors);
          });
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  //For Login Portion
  const login = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/users/login",
        {
          email: email_login,
          password: password_login,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("response: ", res);
        console.log("response data: ", res.data);
        //setUserEmail(email_login);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", res.data.user._id);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err.data);
        //console.log(err);
        setErrorMessage(err.data.message);
        //setErrorMessage(err.res.data.errors);
      });
  };

  return (
    // main div
    <div className="flex flex-col w-screen items-center">
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-screen w-screen fixed -z-10"></div>
      <div className="font-bold text-5xl font-sans text-slate-500 mt-8 mb-28">
        To Do It
      </div>
      <div className="flex flex-row w-5/6 justify-around flex-wrap">
        {/* Div for Login Form */}
        <div className="w-[400px] min-h-[450px] mb-8">
          <div className="min-h-full flex items-center rounded-2xl shadow-lg justify-center px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-md w-full">
              <div>
                <h2 className="text-center text-4xl text-gray-90 font-bold text-slate-400">
                  Login
                </h2>
              </div>
              <form className="mt-8" method="POST" onSubmit={login}>
                {errorMessage ? (
                  <div className="alert alert-danger my-1">{errorMessage}</div>
                ) : null}
                <div className="rounded-md shadow-sm -space-y-px">
                  {/* Email */}
                  <div className="p-1">
                    <label htmlFor="email" className="sr-only">
                      {" "}
                      email:{" "}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="emailuser@domain.com"
                      onChange={(e) => {
                        setEmail_login(e.target.value);
                      }}
                    />
                  </div>

                  {/* Password */}
                  <div className="p-1">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword_login(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative top-16 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                    </svg>
                  </span>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Div for Register Form */}
        <div className="mb-8">
          <div className="min-h-full w-[400px] rounded-2xl shadow-lg flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-md  w-full">
              <div>
                {confirmReg ? (
                  <h4 className="text-center">{confirmReg}</h4>
                ) : null}
                <h2 className="mt-6 text-center text-4xl font-bold text-gray-90 text-slate-400">
                  Sign Up
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                action="#"
                method="POST"
                onSubmit={register}
              >
                <div className="rounded-md shadow-sm -space-y-px">
                  {/* First Name */}
                  <div className="p-1">
                    <label htmlFor="firstName" className="sr-only">
                      First Name:{" "}
                    </label>
                    <input
                      name="firstName"
                      type="firstName"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="First Name"
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

                  {/* Last Name */}
                  <div className="p-1">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name:{" "}
                    </label>
                    <input
                      name="lastName"
                      type="lastName"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Last Name"
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

                  {/* Email */}
                  <div className="p-1">
                    <label htmlFor="email" className="sr-only">
                      {" "}
                      email:{" "}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="emailuser@domain.com"
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
                  {/* Password */}
                  <div className="p-1">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
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

                  {/* Confirm Password */}
                  <div className="p-1">
                    <label htmlFor="confirmPassword" className="sr-only">
                      {" "}
                      Confirm Password
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
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
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                      </svg>
                    </span>
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
