import React from 'react';
import PropTypes from 'prop-types';

async function deleteTask(taskId) {
  const formData = new FormData();
  formData.append('id', taskId);

  await fetch('http://localhost:3001/task/delete', {
    method: 'DELETE',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((json) => json.json())
    .then((response) => console.log(response));
}

function DeleteButtom(props) {
  const { taskId } = props;
  return (
    <button
      type="button"
      onClick={() => deleteTask(taskId)}
    >
      🗑️
    </button>
  );
}

DeleteButtom.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default DeleteButtom;
