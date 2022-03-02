import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [render, setRender] = useState(false);

  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/");
    }
    axios
      .get(`http://localhost:8000/api/goals/user/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setRender(false);
        setGoalsList([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 401") {
          navigate("/");
        }
      });
  }, [render]);

  const handleNewCard = (e) => {
    e.preventDefault();
    setGoalsList([
      {
        title: "",
        startDate: "",
        dueDate: "",
        description: "",
        milestones: [],
        completed: false,
        comments: [],
        editing: true,
      },
      ...goalsList,
    ]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-screen w-screen fixed -z-10"></div>
      <Nav />
      <SearchBar />
      <button
        className="bg-white rounded-md mb-2 mt-4 px-2 p-1 text-slate-500 shadow-lg hover:bg-slate-200 font-bold"
        onClick={(e) => handleNewCard(e)}
      >
        Create New Card
      </button>
      {goalsList.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            goalsList={goalsList}
            setGoalsList={setGoalsList}
            cardIndex={index}
            setRender={setRender}
          />
        );
      })}
    </div>
  );
};

export default Profile;
