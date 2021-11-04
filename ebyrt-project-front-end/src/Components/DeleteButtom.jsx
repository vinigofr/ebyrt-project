import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Para usar o metodo DELETE no axios, consultei a seguinte pagina:
// https://masteringjs.io/tutorials/axios/delete

async function deleteTask(taskId, forceUpdate) {
  await axios.delete('http://localhost:3001/task/delete', {
    data: { id: taskId },
  })
    .then((response) => response.data);
  return forceUpdate();
}

function DeleteButtom(props) {
  const { taskId, forceUpdate } = props;
  return (
    <button
      type="button"
      onClick={() => deleteTask(taskId, forceUpdate)}
    >
      🗑️
    </button>
  );
}

DeleteButtom.propTypes = {
  taskId: PropTypes.string.isRequired,
  forceUpdate: PropTypes.func.isRequired,
};

export default DeleteButtom;
