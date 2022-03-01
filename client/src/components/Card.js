import axios from "axios";
import React, { useEffect, useState } from "react";
import Milestone from "./Milestone";

const Card = (props) => {
  const { card, goalsList, setGoalsList, cardIndex } = props;
  const [thisCard, setThisCard] = useState({});

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!thisCard._id) {
      let goal = {
        title: thisCard["title"],
        description: thisCard["description"],
        completed: thisCard["completed"],
        comments: thisCard["comments"],
        milestones: thisCard["milestones"],
        startDate: thisCard["startDate"],
        dueDate: thisCard["dueDate"],
        completedDate: thisCard["completedDate"],
      };
      console.log("goal variable before post", goal);
      axios
        .post("http://localhost:8000/api/goals", goal, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          let editing = { ...res.data, editing: false };
          setThisCard(editing);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let goal = {
        title: thisCard["title"],
        description: thisCard["description"],
        completed: thisCard["completed"],
        comments: thisCard["comments"],
        milestones: thisCard["milestones"],
        startDate: thisCard["startDate"],
        dueDate: thisCard["dueDate"],
        completedDate: thisCard["completedDate"],
      };
      console.log("goal variable before post", goal);
      axios
        .put(`http://localhost:8000/api/goals/${thisCard._id}`, goal, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          let editing = { ...res.data };
          editing["editing"] = false;
          setThisCard(editing);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setThisCard({ ...card });
  }, [card]);

  const handleChange = (e) => {
    let editing = { ...thisCard };
    editing[e.target.name] = e.target.value;
    let listClone = [...goalsList];
    listClone[cardIndex] = editing;
    setGoalsList(listClone);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/goals/${thisCard._id}`, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!thisCard["editing"]) {
      let cardClone = { ...thisCard, editing: true };
      setThisCard(cardClone);
    } else {
      let cardClone = { ...thisCard };
      cardClone["editing"] = true;
      setThisCard(cardClone);
    }
  };

  const addMilestone = (e) => {
    e.preventDefault();
    let changeCard = { ...thisCard };
    changeCard["milestones"] = [
      ...thisCard["milestones"],
      {
        title: "",
        description: "",
        startDate: "",
        dueDate: "",
        completedDate: "",
        completed: false,
        milestoneEditing: true,
      },
    ];
    setThisCard(changeCard);
  };

  const removeMilestone = (index) => {
    let clone = { ...thisCard };
    clone["milestones"].splice(index, 1);
    console.log(clone);
    setThisCard(clone);
  };

  const displayDate = (d) => {
    let date = new Date(d);
    return date.toLocaleString("en-us", options);
  };

  return (
    <div className=" bg-white rounded-2xl w-1/2 max-w-[600px] flex flex-col items-center shadow-xl mt-2 h-auto mb-2">
      {thisCard.editing === true ? (
        <form className="flex flex-col items-center w-5/6">
          <div className="flex flex-row justify-between items-end w-full">
            <label className="text-2xl font-bold font-sans mt-4">
              Goal Name:
            </label>
            <input
              className="border rounded-md border-slate-300 h-8 w-[246px] text-2xl font-bold"
              type="text"
              name="title"
              value={thisCard.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between mt-2">
              <label>Start Date/Time:</label>
              <input
                className="border rounded-md border-slate-300"
                type="datetime-local"
                name="startDate"
                value={thisCard.startDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-row justify-between mt-2">
              <label>Due Date/Time:</label>
              <input
                className="border rounded-md border-slate-300"
                type="datetime-local"
                name="dueDate"
                min={thisCard.startDate}
                value={thisCard.dueDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col justify-between mt-2">
              <label>Description:</label>
              <textarea
                cols="50"
                rows="4"
                className="border rounded-md border-slate-300"
                name="description"
                value={thisCard.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <h2 className="text-xl font-bold font-sans mt-2">Milestones:</h2>
            {thisCard.milestones
              ? thisCard.milestones.map((mile, index) => {
                  return (
                    <Milestone
                      key={index}
                      milestone={mile}
                      index={index}
                      removeMilestone={removeMilestone}
                      cardIndex={cardIndex}
                      goalsList={goalsList}
                      setGoalsList={setGoalsList}
                    />
                  );
                })
              : null}
            <button
              className=" bg-slate-300 rounded w-32 hover:bg-slate-400 mb-4 mt-2 shadow-md"
              onClick={(e) => addMilestone(e)}
            >
              Add Milestone
            </button>
          </div>
          <button
            onClick={(e) => handleSave(e)}
            className="rounded-md bg-green-400 mb-4 px-2 p-1"
          >
            Save Goal
          </button>
        </form>
      ) : (
        <div className="mb-4 w-4/6">
          <h2 className="text-4xl font-bold font-sans text-slate-500 mt-2 text-center mb-4">
            {card.title}
          </h2>
          <div>
            <h3>
              <span className="font-bold text-slate-500">Start Date:</span>{" "}
              {displayDate(card.startDate)}
            </h3>
            <h3>
              <span className="font-bold text-slate-500">Due Date:</span>{" "}
              {displayDate(card.dueDate)}
            </h3>
          </div>
          <div>
            <h3 className="font-bold text-slate-500">Description:</h3>
            <h4 className="border border-slate-300 w-full min-h-[50px] rounded-md p-2 my-2">
              {card.description}
            </h4>
          </div>
          <div className="flex flex-row justify-between">
            <button
              onClick={(e) => handleEdit(e)}
              className=" bg-yellow-300 hover:bg-yellow-200 shadow-md rounded-md px-2 p-1"
            >
              Edit Goal
            </button>
            <button
              onClick={(e) => handleDelete(e)}
              className="rounded-md px-2 shadow-md bg-red-500 hover:bg-red-400 p-1"
            >
              Delete Goal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
