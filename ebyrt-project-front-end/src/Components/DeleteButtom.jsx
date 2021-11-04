import React from 'react';
import PropTypes from 'prop-types';

function anyFunction(taskId) {
  console.log(taskId);
}

function DeleteButtom(props) {
  const { taskId } = props;
  return (
    <button
      type="button"
      onClick={() => anyFunction(taskId)}
    >
      🗑️
    </button>
  );
}

DeleteButtom.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default DeleteButtom;
