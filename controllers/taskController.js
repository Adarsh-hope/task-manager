const Task = require('../models/taskModel');

const taskController = {
    getAllTask : async (req, res) => {
        try {
            const task = await Task.find({});
            res.json(task)
        } catch (error) {
            res.status(500). json({error : error.message});
        }
    },

    createTask : async (req, res) =>{
        try {
            const task = new Task(req.body);
            await task.save();
            res.status(201).json(task)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    },

    getSingleTask : async (req, res) => {
        try {
            const { id } = req.params;
            const tasks = await Task.findById(id);
            if(!tasks){
                return res.status(404).json({ error : "Task not found" });
            }
            res.json(tasks);
        } catch (error) {
            res.status(500).json({error : error.message })
        }
    },

    upDateTask : async (req, res) =>{
        try {
            const {id} = req.params;
            const task = await Task.findByIdAndUpdate(id, req.body, { new : true });
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.findByIdAndDelete(id);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = taskController