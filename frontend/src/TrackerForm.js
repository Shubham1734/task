import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackerForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  // const [taskDate, setTaskDate] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/tasks')
  //     .then(response => setTasks(response.data))
  //     .catch(error => console.error('Error fetching tasks:', error));
  // }, []);
  const [isSubmit, setIsSubmit] = useState(false);
      const [formData, setFormData] = useState({
        taskName: '',
        taskDescription: '',
      });

  const handleadd = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

  const response = await fetch('http://localhost:5000/api/addtask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response)
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/deletetask/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`Task with ID ${taskId} deleted successfully`);
        setTasks(tasks.filter(task => task.id !== taskId));
      } else {
        console.error('Error deleting task:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  return (
    <div>
      <form>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <br></br>
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
        
<br></br>
        <button type="button" onClick={handleadd}>
          Add Task
        </button>
        <button type="button" onClick={handleDelete}>
          Delete Task
        </button>
        <button type="button" onClick={handleDelete}>
          Edit
        </button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.taskName} - {task.taskDescription} - {task.taskDate}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackerForm;
