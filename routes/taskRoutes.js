const express =  require("express");
const router = express.Router();
const taskController = require("../controllers/taskController")




router.get('/tasks', taskController.getAllTask);
router.post('/tasks', taskController.createTask)
router.get('/tasks/:id', taskController.getSingleTask)
router.patch('/tasks/:id', taskController.upDateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router