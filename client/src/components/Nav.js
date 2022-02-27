import React, { useState } from "react";
import axios from "axios";

const Nav = (props) => {
  const { subtitle } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/login",
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("loggedIn", "true");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
  };

  return (
    <div className="flex flex-row items-start w-5/6 justify-around">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl font-sans">To Do It</h1>
        <h2 className="font-bold text-2xl font-sans">{subtitle}</h2>
      </div>
      <div>
        {localStorage.getItem("loggedIn") === "True" ? (
          <div>
            <button
              onClick={(e) => handleLogout(e)}
              className="bg-red-500 rounded-md mt-2 px-2 hover:bg-red-400 shadow-md p-0.5 mr-4 font-bold"
            >
              LogOut
            </button>
            <button className=" bg-emerald-500 rounded-md mt-2 px-2 shadow-md hover:bg-emerald-400 p-0.5 font-bold">
              Find People
            </button>
          </div>
        ) : (
          <div className="mt-2">
            <label className="mr-1">Email:</label>
            <input
              className="border border-blue-400 rounded-md mr-4"
              type="text"
              name="email"
              id=""
              placeholder="Email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
            <label className="mr-1">Password:</label>
            <input
              className="border border-blue-400 rounded-md mr-4"
              type="text"
              name="email"
              id=""
              placeholder="Password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
            <button
              onClick={(e) => handleLogin(e)}
              className="border border-green-400 rounded px-2 bg-green-400 shadow-md hover:bg-green-300 hover:border-green-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
