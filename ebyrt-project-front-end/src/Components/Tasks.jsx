import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    async function fetchTasks() {
      await fetch('http://localhost:3001/task/all')
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
          setLoading(false);
        });
    }

    fetchTasks();
  }, [loading]);

  return loading ? <Loading /> : (
    <div>
      <ul>
        {tasks.map(({ title, _id }) => (
          <li key={_id}>{`${title} ---- ${_id}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
