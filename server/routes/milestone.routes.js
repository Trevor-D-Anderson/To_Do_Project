const MilestoneController = require("../controllers/milestone.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.get(
    "/api/milestones",
    authenticate,
    MilestoneController.findAllMilestones
  );
  app.post(
    "/api/milestones",
    authenticate,
    MilestoneController.createMilestone
  );
  app.get(
    "/api/milestones/:id",
    authenticate,
    MilestoneController.findOneMilestone
  );
  app.put(
    "/api/milestones/:id",
    authenticate,
    MilestoneController.updateMilestone
  );
  app.delete(
    "/api/milestones/:id",
    authenticate,
    MilestoneController.deleteMilestone
  );
};
