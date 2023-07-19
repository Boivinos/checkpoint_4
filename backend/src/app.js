const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const router = require("./router");

app.use(router);

module.exports = app;
