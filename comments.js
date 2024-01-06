// create web server with express
const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments_controller");

// route to create a comment
router.post("/create", commentsController.create);

// route to delete a comment
router.get("/destroy/:id", commentsController.destroy);

module.exports = router;
