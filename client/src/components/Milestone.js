import React, { useState } from "react";

const Milestone = () => {
  const [milestone, setMilestone] = useState({
    title: "",
    description: "",
    dueDate: 0,
    completed: false,
  });
  return <div>Milestone</div>;
};

export default Milestone;
