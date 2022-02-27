import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const Profile = () => {
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/goals").then((res) => {
      console.log(res);
      setGoalsList([...goalsList, ...res.data]);
    });
  });

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

  return (
    <div className="flex flex-col items-center">
      <Nav subtitle={"Profile Page"} />
      <SearchBar />
      <button onClick={(e) => handleNewCard(e)}>Create New Card</button>
      {goalsList.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default Profile;
