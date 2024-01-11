import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Message = styled.p`
  color: #666;
  text-align: center;
`;

const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ListContainer>
      <Title>Task List</Title>
      {tasks.length === 0 ? (
        <Message>No tasks available.</Message>
      ) : (
        <TaskListContainer>
          {tasks.map((task) => (
            <TaskItem key={task._id} name={task.name} task={task} updateTask={updateTask} deleteTask={deleteTask} />
          ))}
        </TaskListContainer>
      )}
    </ListContainer>
  );
};

export default TaskList;
