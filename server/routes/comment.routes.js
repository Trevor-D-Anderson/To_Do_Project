const CommentController = require("../controllers/comment.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.get("/api/comments", authenticate, CommentController.findAllComments);
  app.post("/api/comments", authenticate, CommentController.createComment);
  app.get("/api/comments/:id", authenticate, CommentController.findOneComment);
  app.put("/api/comments/:id", authenticate, CommentController.updateComment);
  app.delete(
    "/api/comments/:id",
    authenticate,
    CommentController.deleteComment
  );
};
