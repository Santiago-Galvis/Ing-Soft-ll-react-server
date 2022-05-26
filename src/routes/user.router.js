const express = require("express");
const UserController = require("../controller/User");

const api = express.Router();

api.post("/signup", UserController.signUp);
api.post("/signin", UserController.signIn);

module.exports = api;
