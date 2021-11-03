import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Context from '../Context/Context';
import TasksContainer from './TasksContainer';

function Tasks() {
  const { setTasks } = React.useContext(Context);
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

    // (
    //   <div>
    //     <ul>
    //       {tasks.map(({ title, _id }) => (
    //         <li key={_id}>{`${title} ---- ${_id}`}</li>
    //       ))}
    //     </ul>
    //   </div>
    // )

    fetchTasks();
  }, [loading]);

  return loading ? <Loading /> : <TasksContainer />;
}

export default Tasks;
