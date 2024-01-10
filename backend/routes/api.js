const express = require('express');
const router = express.Router();
const User = require('../models/task');

router.post('/addtask', async (req, res) => {
    const formData = req.body;

    try {
      const newTask = new User({
        name: formData.taskName,
        Description: formData.taskDescription,

      });
  
      await newTask.save();
  
      res.status(200).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.delete('/deletetask/:id', async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const deletedTask = await User.findByIdAndDelete(taskId);
  
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
