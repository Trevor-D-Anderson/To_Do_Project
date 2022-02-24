import React, { useState } from "react";

const Nav = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Setting login to a useState. to be changed when we have a login cookie
  const [login, setLogin] = useState(true);

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-row items-end w-5/6 justify-around">
      <h1 className="font-bold text-5xl font-sans">Make it Your Goal</h1>
      <div>
        {login ? (
          <div>
            <button className="bg-red-500 rounded-md px-2 hover:bg-red-400 shadow-md p-0.5 mr-4">
              LogOut
            </button>
            <button className=" bg-emerald-500 rounded-md px-2 shadow-md hover:bg-emerald-400 p-0.5">
              Find People
            </button>
          </div>
        ) : (
          <div>
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
              placeholder="Email"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
            <button className="border border-green-400 rounded px-2 bg-green-400 shadow-md hover:bg-green-300 hover:border-green-300">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
