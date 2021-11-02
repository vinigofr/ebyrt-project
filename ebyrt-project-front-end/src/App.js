import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components \/
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
// Components /\

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
