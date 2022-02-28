import React, { useEffect, useState } from "react";
import Milestone from "./Milestone";

const Card = (props) => {
  const { card, goalsList, setGoalsList, cardIndex } = props;
  const [thisCard, setThisCard] = useState({ ...card });

  useEffect(() => {
    let listClone = [...goalsList];
    listClone[cardIndex] = thisCard;
    setGoalsList(listClone);
  }, [thisCard]);

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
        startDate: 0,
        dueDate: 0,
        completedDate: 0,
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

  return (
    <div className=" bg-white rounded-md w-1/2 flex flex-col items-center shadow-xl mt-2 h-auto mb-2">
      {thisCard.editing ? (
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
                      cardEditing={thisCard.editing}
                      removeMilestone={removeMilestone}
                      cardIndex={cardIndex}
                      goalsList={goalsList}
                      setGoalsList={setGoalsList}
                    />
                  );
                })
              : null}
            <button
              className=" bg-emerald-400 rounded w-32 hover:bg-emerald-300 mb-4 mt-2 shadow-md"
              onClick={(e) => addMilestone(e)}
            >
              Add Milestone
            </button>
          </div>
          <button className="rounded-md bg-green-400 mb-4 px-2 p-1">
            Save Goal
          </button>
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
