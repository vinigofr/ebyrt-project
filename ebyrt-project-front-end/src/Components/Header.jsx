import React from 'react';
import AddTask from './AddTask';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f4f4f4',
  justifyContent: 'center',
  alignItems: 'center',
};

function Header() {
  return (
    <header style={style}>
      <h1>Task Manager (Ebyrt Project)</h1>
      <div>
        <AddTask />
      </div>
    </header>
  );
}

export default Header;
