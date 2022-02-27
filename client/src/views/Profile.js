import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [goalsList, setGoalsList] = useState([]);

  const userId = 0;

  const navigate = useNavigate();

  // this is correct!

  // useEffect(() => {
  //   if (localStorage.getItem("loggedIn") !== "true") {
  //     navigate("/");
  //   }
  //   axios
  //     .get(`http://localhost:8000/api/goals/user/${userId}`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setGoalsList([...goalsList, ...res.data]);
  //     });
  // }, []);

  const handleNewCard = (e) => {
    e.preventDefault();
    setGoalsList([
      ...goalsList,
      {
        title: "",
        startDate: Date.now(),
        dueDate: 0,
        description: "",
        milestones: [],
        completed: false,
        comments: [],
        editing: true,
      },
    ]);
  };

  if (goalsList.length === 0) {
    setGoalsList([
      ...goalsList,
      {
        title: "",
        startDate: Date.now(),
        dueDate: "",
        completedDate: "",
        description: "",
        milestones: [],
        completed: false,
        comments: [],
        editing: true,
      },
    ]);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-screen w-screen fixed -z-10"></div>
      <Nav subtitle={"Profile Page"} />
      <SearchBar />
      <button
        className="bg-white rounded-md mt-4 px-2 p-1 shadow-lg hover:bg-slate-200 font-bold"
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
          />
        );
      })}
    </div>
  );
};

export default Profile;
