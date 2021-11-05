import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/General.css';
import TaskType from './TaskType';
import AddTask from './AddTask';

const types = [
  'pendente',
  'fazendo',
  'feito',
];

function TasksContainer({ forceUpdate }) {
  return (
    <>
      <AddTask forceUpdate={forceUpdate} />
      <div style={style} className="tasks-container">
        {
        types.map((type) => <TaskType type={type} forceUpdate={forceUpdate} key={type} />)
      }
      </div>
    </>
  );
}

TasksContainer.propTypes = {
  forceUpdate: PropTypes.func.isRequired,
};

export default TasksContainer;
