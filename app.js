const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const { API_VERSION } = require("./config");

const userRoutes = require("./src/routes/user.router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Evitar bloqueo del CORS
app.use(cors());
// Endpoint del proyecto
app.use(`/api/${API_VERSION}`, userRoutes);

/* Configuración de Los header HTTP */
module.exports = app;
