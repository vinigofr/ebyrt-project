import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

function TaskType(props) {
  const { tasks } = React.useContext(Context);

  const { type } = props;
  return (
    <div>
      <h2>{type}</h2>
      <div>
        {tasks.map((task) => (<div>{ task.status === type ? task.title : null}</div>))}
      </div>
    </div>
  );
}

TaskType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TaskType;
