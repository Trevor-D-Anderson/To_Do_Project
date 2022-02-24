const UserController = require("../controllers/user.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/users/register", UserController.register);
  app.post("/api/users/login", UserController.login);
  app.post("/api/users/logout", UserController.logout);
  app.get("/api/users", authenticate, UserController.getAllUsers);
  app.get("/api/users/:email", authenticate, UserController.getOneUser); // will need route for getting users by id also
  app.put("/api/users/:email", authenticate, UserController.updateUser);
  app.delete("/api/users/:id", UserController.deleteUser);
};
