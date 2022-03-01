import React, { useState } from "react";

const Milestone = (props) => {
  const {
    milestone,
    editing,
    index,
    removeMilestone,
    cardIndex,
    goalsList,
    setGoalsList,
    card,
  } = props;
  const [mile, setMile] = useState({ ...milestone });

  const handleChange = (e) => {
    e.preventDefault();
    let editing = { ...mile };
    editing[e.target.name] = e.target.value;
    setMile(editing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let milestoneClone = { ...mile };
    let cardClone = { ...card };
    let listClone = [...goalsList];
    cardClone.milestones[index] = milestoneClone;
    cardClone.milestones[index].milestoneEditing = false;
    listClone[cardIndex] = cardClone;
    console.log("list Clone:", listClone);
    setGoalsList(listClone);
  };
  //to format dates
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div>
      {mile.milestoneEditing === true ? (
        <div className="border rounded-md border-blue-400 p-2 mb-2">
          <div className="flex flex-row justify-between mb-1 ">
            <label className="text-lg font-bold font-sans">
              Milestone Name:
            </label>
            <input
              className="border rounded-md border-blue-400 h-8 w-[246px] text-2xl font-bold"
              type="text"
              name="title"
              value={mile.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-row justify-between mb-2">
            <label>Milestone Start Date/Time</label>
            <input
              className="border rounded-md border-blue-400 ml-2"
              type="datetime-local"
              name="startDate"
              id=""
              value={mile.startDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-row justify-between mb-2">
            <label>Milestone Due Date/Time</label>
            <input
              className="border rounded-md border-blue-400 ml-2"
              type="datetime-local"
              name="dueDate"
              id=""
              value={mile.dueDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col">
            <label>Description</label>
            <textarea
              cols="50"
              rows="4"
              className="resize-y border rounded-md border-blue-400"
              name="description"
              onChange={(e) => handleChange(e)}
              value={mile.description}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between">
            <button
              name="milestoneEditing"
              value={false}
              onClick={(e) => handleSave(e)}
              className="rounded bg-sky-400 px-[11px] my-2 shadow-md hover:bg-sky-300"
            >
              Save Milestone
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeMilestone(index);
              }}
              className="rounded bg-red-500 px-[11px] my-2 shadow-md hover:bg-red-400"
            >
              Remove Milestone
            </button>
          </div>
        </div>
      ) : (
        <div className="border rounded-md border-blue-400 p-2 mb-2">
          <h2 className="text-lg font-bold font-sans">{mile.title}</h2>
          <div>
            <h4 className="mb-1">
              Start Date: {mile.startDate.toLocaleDateString("en-us", options)}
            </h4>
            <h4 className="mb-1">
              Due Date: {mile.dueDate.toLocaleDateString("en-us", options)}
            </h4>
            <h3 className="font-bold text-md">Description:</h3>
            <h4 className="mb-1">{mile.description}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Milestone;
