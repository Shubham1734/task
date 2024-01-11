const express = require('express');
const router = express.Router();
const Task = require('../models/task');
// for get all the data
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//for adding particular task
router.post('/addtask', async (req, res) => {
    const formData = req.body;
    console.log(formData);
    try{
      const newTask = new Task({
        name: formData.title,
        Description: formData.description,
      });
      await newTask.save();
  
      res.status(200).json(newTask);
    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
//for deleting particular task with id
router.delete('/deletetask/:id', async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
  
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // for updating task with particular id
  router.patch('/updatetask/:id', async (req, res) => {
    const taskId = req.params.id;
    const Data = req.body;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { name: Data.title, Description: Data.description },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
