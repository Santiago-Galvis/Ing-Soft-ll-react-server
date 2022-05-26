const express = require("express");
const userRoutes = require("./user.router");

function routerApi(app) {
  const routes = express.Router();
  app.use("/api/v1", routes); /* endpoint http://localhost:3000/api/v1 */
  routes.use("/users", userRoutes);
}

module.exports = routerApi;
