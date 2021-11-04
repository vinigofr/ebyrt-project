import React from 'react';

function AddTask() {
  return (
    <div className="add-task-field">
      <form>
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Descrição" />
      </form>
      <button type="button">
        ➕ Nova Tarefa
      </button>
    </div>
  );
}

export default AddTask;
