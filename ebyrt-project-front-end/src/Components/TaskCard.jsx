import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButtom';

function TaskCard({ task }) {
  const {
    title,
    description,
    status,
    createdAt,
  } = task;

  return (
    <div className="task-card">
      <p>{`Título: ${title}`}</p>
      <p>{`Descrição: ${description}`}</p>
      <p>{`Status: ${status}`}</p>
      <p>{`Criado em: ${createdAt}`}</p>
      <DeleteButton />
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default TaskCard;
