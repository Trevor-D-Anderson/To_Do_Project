const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Milestone Title is required."],
      minlength: [2, "Title must be at least 2 characters long."],
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    startDate: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    completedDate: {
      type: String,
    },
    associatedGoal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
    },
  },
  { timestamps: true }
);

const Milestone = mongoose.model("Milestone", MilestoneSchema);

module.exports = Milestone;
