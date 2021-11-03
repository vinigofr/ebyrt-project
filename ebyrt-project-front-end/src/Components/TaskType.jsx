import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

function TaskType(props) {
  const { tasks } = React.useContext(Context);

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
