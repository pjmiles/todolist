require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const db = require("./config/mongoose");
const port = 4000;
const Todo = require('./model/task')


const app = express();
app.use(express.json());









app.listen(process.env.PORT || port, () =>
  console.log(`Server started on port: ${port}`)
);
