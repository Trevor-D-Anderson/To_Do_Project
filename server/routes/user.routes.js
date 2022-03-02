const UserController = require("../controllers/user.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/users/register", UserController.register);
  app.post("/api/users/login", UserController.login);
  app.post("/api/users/logout", UserController.logout);
  app.get("/api/users", authenticate, UserController.getAllUsers);
  // get the logged in user by the id stored in their jwt cookie -- no parameters required
  app.get(
    "/api/users/authenticated",
    authenticate,
    UserController.getLoggedInUser
  );
  // get / update using id
  app.get("/api/users/id/:id", authenticate, UserController.getOneUserById);
  app.put("/api/users/id/:id", authenticate, UserController.updateUserById);
  // get / update using email
  app.get(
    "/api/users/email/:email",
    authenticate,
    UserController.getOneUserByEmail
  ); // will need route for getting users by id also
  app.put(
    "/api/users/email/:email",
    authenticate,
    UserController.updateUserByEmail
  );
  app.delete("/api/users/delete/:id", UserController.deleteUser);
  //below is for the search functionality
  app.get(
    "/api/users/search/:searchTerm",
    authenticate,
    UserController.searchUsers
  );
};
