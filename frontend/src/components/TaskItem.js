import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskDetails = styled.div`
  flex-grow: 1;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.2em;
`;

const Description = styled.span`
  color: #666;
`;

const EditButton = styled.button`
  margin-left: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

const TaskItem = ({ task, name, updateTask, deleteTask }) => {
  const [editable, setEditable] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task._id, { title: updatedTitle, description: updatedDescription });
    setEditable(false);
  };

  return (
    <ListItem>
      {editable ? (
        <>
          <input
            value={updatedTitle}
            placeholder="Task"
            style={{ marginRight: '10px', padding: '8px', flex: '1' }}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            value={updatedDescription}
            placeholder="Description"
            style={{ marginRight: '10px', padding: '8px', flex: '2' }}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <EditButton onClick={handleUpdate}>Update</EditButton>
        </>
      ) : (
        <TaskDetails>
          <Title>{name}</Title>
          {task.description && <Description> - {task.description}</Description>}
        </TaskDetails>
      )}
      <EditButton onClick={() => setEditable(true)}>Edit</EditButton>
      <DeleteButton onClick={() => deleteTask(task._id)}>Delete</DeleteButton>
    </ListItem>
  );
};

export default TaskItem;
