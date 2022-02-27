import React, { useState } from "react";

const SearchBar = () => {
  const [sortedBy, setSortedBy] = useState("");
  return (
    <div className="flex flex-row w-3/5 mt-2 justify-around items-center bg-white rounded-md">
      <label className="font-bold font-sans text-lg">Find Your Goals</label>
      {sortedBy === "Completed" ? (
        <button
          className=" px-2 text-lg my-2 rounded border-2 border-cyan-300 bg-cyan-300"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Completed
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-cyan-300 rounded border-2"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("Completed");
          }}
        >
          Completed
        </button>
      )}
      {sortedBy === "In Progress" ? (
        <button
          className=" px-2 text-lg my-2 border-cyan-400 rounded border-2 bg-cyan-400"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          In Progress
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-cyan-400 rounded border-2"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("In Progress");
          }}
        >
          In Progress
        </button>
      )}
      {sortedBy === "Date Added" ? (
        <button
          className=" px-2 text-lg my-2 border-sky-400 rounded border-2 bg-sky-400"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Date Added
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-sky-400 rounded border-2"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("Date Added");
          }}
        >
          Date Added
        </button>
      )}
      {sortedBy === "Due Date" ? (
        <button
          className=" px-2 text-lg my-2 border-sky-500 rounded border-2 bg-sky-500"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Due Date
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-sky-500 rounded border-2"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("Due Date");
          }}
        >
          Due Date
        </button>
      )}
    </div>
  );
};

export default SearchBar;
