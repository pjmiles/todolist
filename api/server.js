require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const db = require('./config/mongoose')

const app = express();

app.use(express.json());




app.listen(4000, () => console.log("Server started on port 4000"));