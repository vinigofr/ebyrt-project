import React from 'react';
import style from '../Styles/General.css';
import TaskType from './TaskType';

const types = [
  'pending',
  'doing',
  'done',
];

function TasksContainer() {
  return (
    <div style={style} className="tasks-container">
      {
        types.map((type) => <TaskType type={type} />)
      }
    </div>
  );
}

export default TasksContainer;
