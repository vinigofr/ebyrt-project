import React from 'react';
import PropTypes from 'prop-types';

function TaskType(props) {
  const { type } = props;
  return (
    <div>
      { type }
    </div>
  );
}

TaskType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TaskType;
