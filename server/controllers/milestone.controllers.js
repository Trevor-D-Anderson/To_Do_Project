const Milestone = require("../models/milestone.model");
const Goal = require("../models/goal.model");
const jwt = require("jsonwebtoken");

module.exports = {
  findAllMilestones: (request, response) => {
    Milestone.find()
      .then((allMilestones) => {
        console.log(allMilestones);
        response.json(allMilestones);
      })
      .catch((err) => {
        console.log("Find All failed");
        response.status(400).json(err);
      });
  },

  findOneMilestone: (req, res) => {
    Milestone.findOne({ _id: req.params.id })
      .then((oneMilestone) => {
        console.log(oneMilestone);
        res.json(oneMilestone);
      })
      .catch((err) => {
        console.log("Find One failed");
        res.status(400).json(err);
      });
  },

  createMilestone: (req, res) => {
    const newMilestoneObject = new Milestone(req.body);
    newMilestoneObject.createdBy = req.jwtpayload.id;

    newMilestoneObject
      .save()
      .then((newlyCreatedMilestone) => {
        console.log(newlyCreatedMilestone);

        // push milestone into milestones field of goal that it was created for
        Goal.findOneAndUpdate(
          { _id: newlyCreatedMilestone.associatedGoal },
          {
            $addToSet: { milestones: newlyCreatedMilestone._id },
          },
          {
            new: true,
            useFindAndModify: true,
          }
        )
          .populate("milestones", "body completed createdBy _id")
          .then((goalToUpdate) => {
            console.log(goalToUpdate);
            res.json(newlyCreatedMilestone);
          })
          .catch((err) => {
            console.log("Create failed");
            console.log("Push to goal failed.");
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

  updateMilestone: (req, res) => {
    Milestone.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedMilestone) => {
        console.log(updatedMilestone);
        res.json(updatedMilestone);
      })
      .catch((err) => {
        console.log("Update failed");
        res.status(400).json(err);
      });
  },
  
  deleteMilestone: (req, res) => {
    Milestone.deleteOne({ _id: req.params.id })
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
