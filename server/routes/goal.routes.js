const GoalController = require("../controllers/goal.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.get("/api/goals", authenticate, GoalController.findAllGoals);
  app.post("/api/goals", authenticate, GoalController.createGoal);
  app.get("/api/goals/:id", authenticate, GoalController.findOneGoal);
  app.put("/api/goals/:id", authenticate, GoalController.updateGoal);
  app.delete("/api/goals/:id", authenticate, GoalController.deleteGoal);
  app.get(
    "/api/goals/user/:id",
    authenticate,
    GoalController.findAllGoalsByUser
  );
};
