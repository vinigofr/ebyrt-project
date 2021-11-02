import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components \/
import Main from './Pages/Main';
// Components /\

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
