import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import TaskCard from './TaskCard';
import '../Styles/General.css';

function TaskType(props) {
  const { tasks } = React.useContext(Context);
  const { type, forceUpdate } = props;

  return (
    <div className="task-type-container">
      <div className="task-fixed-title">
        <h2>{type}</h2>
      </div>
      <div className="task-type-cards">
        {tasks.map((task) => (
          <>
            {
            task.status === type
              ? <TaskCard task={task} forceUpdate={forceUpdate} />
              : null
            }
          </>
        ))}
      </div>
    </div>
  );
}

TaskType.propTypes = {
  type: PropTypes.string.isRequired,
  forceUpdate: PropTypes.func.isRequired,
};

export default TaskType;
