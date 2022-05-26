const express = require("express");
const UserController = require("../controller/User");

const api = express.Router();

api.post("/singup", UserController.signUp);

module.exports = api;
