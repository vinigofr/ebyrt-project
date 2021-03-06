import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function AddTask({ forceUpdate }) {
  const [task, setTask] = React.useState({
    title: '',
    description: '',
  });

  const createTask = async () => {
    await axios.post('http://localhost:3001/task/create', { ...task })
      .then(() => {
        forceUpdate();
        setTask({ title: '', description: '' });
      })
      .catch(() => alert('Todos os campos devem ser preenchidos!'));
  };

  return (
    <div className="add-task-field">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Título"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title}
        />
        <input
          value={task.description}
          type="text"
          name="description"
          placeholder="Descrição"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </form>
      <button
        type="button"
        onClick={() => createTask()}
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
