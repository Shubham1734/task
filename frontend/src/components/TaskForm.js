import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const TaskForm = ({ addTask, taskCount }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Task:</Label>
      <Input
        type="text"
        placeholder='Enter Task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Label>Description:</Label>
      <Input
        type="text"
        placeholder='Enter Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button type="submit">Add Task</Button>
      <p style={{ marginTop: '10px', textAlign: 'center' }}>Total Tasks: {taskCount}</p>
    </Form>
  );
};

export default TaskForm;
