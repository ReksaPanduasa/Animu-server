const express = require("express");
const { logout } = require("../controllers/auth");
const { createComment, createReply } = require("../controllers/comments")

const routes = express.Router();

routes.post("/logout", logout);
routes.post("/comment", createComment);
routes.post("/reply", createReply);

module.exports = routes;