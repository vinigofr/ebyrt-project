import React from 'react';

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
    </header>
  );
}

export default Header;
