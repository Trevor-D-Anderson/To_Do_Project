import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const { subtitle } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row items-start w-5/6 justify-around">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl font-sans">To Do It</h1>
        <h2 className="font-bold text-2xl font-sans">{subtitle}</h2>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Nav;
