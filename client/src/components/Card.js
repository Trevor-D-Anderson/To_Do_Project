import React, { useState } from "react";

const Card = () => {
  const [goal, setGoal] = useState({
    title: "",
    startDate: Date.now(),
    dueDate: 0,
    description: "",
    milestones: [],
    completed: false,
  });
  const [milestone, setMilestone] = useState({
    title: "",
    description: "",
    dueDate: 0,
    completed: false,
  });

  return (
    <div className="border border-blue-400 rounded-md w-2/5 flex flex-col items-center shadow-md mt-4 h-96">
      <h2 className="text-4xl font-bold font-sans mt-2">Goal Name</h2>
      <form>
        <label htmlFor=""></label>
      </form>
    </div>
  );
};

export default Card;
