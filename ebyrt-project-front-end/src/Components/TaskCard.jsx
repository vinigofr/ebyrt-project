import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButtom';
import EditButton from './EditButton';

function TaskCard({ task }) {
  const {
    title,
    description,
    status,
    createdAt,
    _id,
  } = task;

  return (
    <div className="task-card">
      <p>{`Título: ${title}`}</p>
      <p>{`Descrição: ${description}`}</p>
      <p>{`Status: ${status}`}</p>
      <p>{`Criado em: ${createdAt}`}</p>
      <DeleteButton taskId={_id} />
      <EditButton taskId={_id} />
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default TaskCard;
