const Task = require('../models/Task');

// Create Task
const createTask = async (req, res) => {
    const { title, description, status, user } = req.body;
    try {
        const newTask = new Task({ title, description, status, user });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('user', 'username');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, status }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
