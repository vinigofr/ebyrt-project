import React from 'react';
import PropTypes from 'prop-types';

function TaskType(props) {
  const { type } = props;
  return (
    <div>
      {/* Aqui serão renderizadas as tasks com um filter */}
      {/* As tasks são em formato de card, uns em cima dos outros */}
      { type }
    </div>
  );
}

TaskType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TaskType;
