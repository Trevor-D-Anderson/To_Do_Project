import React, { useState } from "react";

const SearchBar = () => {
  const [sortedBy, setSortedBy] = useState("");
  return (
    <div className="flex flex-row w-3/5 mt-2 justify-around items-center shadow-lg bg-white rounded-md">
      <label className="font-bold font-sans text-lg text-slate-500">
        Find Your Goals
      </label>
      {sortedBy === "Completed" ? (
        <button
          className=" px-2 text-lg my-2 rounded border-2 border-slate-100 bg-slate-100"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Completed
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-slate-300 rounded border-2"
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
          className=" px-2 text-lg my-2 border-slate-200 rounded border-2 bg-slate-200"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          In Progress
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-slate-300 rounded border-2"
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
          className=" px-2 text-lg my-2 border-slate-300 rounded border-2 bg-slate-300"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Date Added
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-slate-300 rounded border-2"
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
          className=" px-2 text-lg my-2 border-slate-400 rounded border-2 bg-slate-400"
          onClick={(e) => {
            e.preventDefault();
            setSortedBy("");
          }}
        >
          Due Date
        </button>
      ) : (
        <button
          className=" px-2 text-lg my-2 border-slate-300 rounded border-2"
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
