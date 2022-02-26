const Goal = require("../models/goal.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports = {
  findAllGoals: (req, res) => {
    Goal.find()
      .then((allGoals) => {
        console.log(allGoals);
        res.json(allGoals);
      })
      .catch((err) => {
        console.log("Find All failed");
        res.status(400).json(err);
      });
  },

  // secure way to get all goals for a user, without passing ID around
  findAllGoalsByUser: (req, res) => {
    Goal.find({ createdBy: req.params.id })
      .populate("milestones", "body completed createdBy _id")
      .populate("comments", "body likes createdFor createdBy _id")
      .then((allGoalsFromUser) => {
        console.log(allGoalsFromUser);
        res.json(allGoalsFromUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  findOneGoal: (req, res) => {
    Goal.findOne({ _id: req.params.id })
      .then((oneGoal) => {
        console.log(oneGoal);
        res.json(oneGoal);
      })
      .catch((err) => {
        console.log("Find One failed");
        res.status(400).json(err);
      });
  },

  createGoal: (req, res) => {
    const newGoalObject = new Goal(req.body);
    newGoalObject.createdBy = req.jwtpayload.id;

    newGoalObject
      .save()
      .then((newlyCreatedGoal) => {
        console.log(newlyCreatedGoal);

        // push goal into goals field of user that created it
        User.findOneAndUpdate(
          { _id: newlyCreatedGoal.createdBy },
          {
            $addToSet: { goals: newlyCreatedGoal._id },
          },
          {
            new: true,
            useFindAndModify: true,
          }
        )
          .populate("goals", "firstName lastName interests customFields _id")
          .then((userToUpdate) => {
            console.log(userToUpdate);
            res.json(newlyCreatedGoal);
          })
          .catch((err) => {
            console.log("Create failed");
            console.log("Push to user failed.");
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        console.log("Create failed");
        console.log("Initial creation failed.");
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateGoal: (req, res) => {
    Goal.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedGoal) => {
        console.log(updatedGoal);
        res.json(updatedGoal);
      })
      .catch((err) => {
        console.log("Update failed");
        res.status(400).json(err);
      });
  },

  deleteGoal: (req, res) => {
    Goal.deleteOne({ _id: req.params.id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log("Delete failed");
        res.status(400).json(err);
      });
  },
};
