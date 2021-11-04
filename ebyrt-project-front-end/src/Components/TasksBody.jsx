import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Context from '../Context/Context';
import TasksContainer from './TasksContainer';

function Tasks() {
  const { setTasks } = React.useContext(Context);
  const [loading, setLoading] = useState(true);
  // Para fazer a re-renderização do componente, precisei consultar uma forma
  // segura de poder fazer isso.
  // Fonte: https://blog.logrocket.com/how-when-to-force-react-component-re-render/
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  //

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

  return loading ? <Loading /> : <TasksContainer forceUpdate={forceUpdate} />;
}

export default Tasks;
