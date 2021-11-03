import React from 'react';
import style from '../Styles/General.css';

const taskTypes = [
  'pending',
  'doing',
  'done',
];

function TasksContainer() {
  return (
    <div style={style} className="tasks-container">
      {
        taskTypes.map((taskType) => (
          <div>{taskType}</div>
        ))
      }
    </div>
  );
}

export default TasksContainer;
