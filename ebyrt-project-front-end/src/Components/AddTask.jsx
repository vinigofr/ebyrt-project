import React from 'react';

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

export default AddTask;
