import React from 'react';
import PropTypes from 'prop-types';

function AddTask({ forceUpdate }) {
  const [task, setTask] = React.useState({
    title: '',
    description: '',
  });

  return (
    <div className="add-task-field">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Título"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </form>
      <button
        type="button"
        onClick={() => console.log(task)}
      >
        ➕ Nova Tarefa
      </button>
    </div>
  );
}

AddTask.propTypes = {
  forceUpdate: PropTypes.func.isRequired,
};

export default AddTask;
