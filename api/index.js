require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cors = require('cors')
const db = require("./config/mongoose"); //database connection
const port = 4000;




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



const Todo = require('./model/task') //model import

// to get all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find()

  res.json(todos)
})

//to create a new todo
app.post('/todo/new', (req, res) =>{
  const todo = new Todo({
    text: req.body.text
  })

  todo.save()
  res.json(todo)
})


//to delete a todo
app.delete('/todo/delete/:id', async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id)

  res.json(result)
})






app.listen(process.env.PORT || port, () =>
  console.log(`Server started on port: ${port}`)
);
