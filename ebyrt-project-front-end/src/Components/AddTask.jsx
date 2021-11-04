import React from 'react';

function AddTaskButton() {
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

export default AddTaskButton;
