import React, { useState } from "react";
import Milestone from "./Milestone";

const Card = (props) => {
  const { card } = props;
  const [thisCard, setThisCard] = useState({ ...card });

  const handleChange = (e) => {
    let editing = { ...thisCard };
    editing[e.target.name] = e.target.value;
    setThisCard(editing);
  };

  const addMilestone = (e) => {
    e.preventDefault();
    let changeCard = { ...thisCard };
    changeCard["milestones"] = [
      ...thisCard["milestones"],
      {
        title: "",
        description: "",
        dueDate: 0,
        completed: false,
      },
    ];
    setThisCard(changeCard);
  };

  return (
    <div className="border border-blue-400 rounded-md w-2/5 flex flex-col items-center shadow-md mt-4 h-96">
      {thisCard.editing ? (
        <form className="flex flex-col items-center w-5/6">
          <div className="flex flex-row justify-around items-end w-11/12">
            <label className="text-2xl font-bold font-sans mt-2">
              Goal Name:
            </label>
            <input
              className="border rounded-md border-blue-400 h-6"
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
                className="border rounded-md border-blue-400"
                type="datetime-local"
                name="startDate"
                value={thisCard.startDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-row justify-between mt-2">
              <label>Due Date/Time:</label>
              <input
                className="border rounded-md border-blue-400"
                type="datetime-local"
                name="dueDate"
                value={thisCard.dueDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-row justify-between mt-2">
              <label>Description:</label>
              <textarea
                className="border rounded-md border-blue-400"
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
                  return <Milestone key={index} milestone={mile} />;
                })
              : null}
            <button
              className=" bg-emerald-400 rounded w-32 hover:bg-emerald-500"
              onClick={(e) => addMilestone(e)}
            >
              Add Milestone
            </button>
          </div>
        </form>
      ) : (
        <h2 className="text-4xl font-bold font-sans mt-2">
          {card.title || "Set Goal Name"}
        </h2>
      )}
    </div>
  );
};

export default Card;
