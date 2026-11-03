const express = require("express");
const router = express.Router();
const { getTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks")


//GET, POST, PUT, DELETE
//GET - /api/v1/tasks - get all tasks
router.get('/', getTasks )

//POST - /api/v1/tasks - create a new task
router.post("/",createTask )
//GET - /api/v1/tasks/:id - get a single task
router.get("/:id", getTask)
//PATCH - /api/v1/tasks/:id - update a task
router.patch("/:id", updateTask)
//DELETE - /api/v1/tasks/:id - delete a task
router.delete("/:id", deleteTask)

module.exports = router
