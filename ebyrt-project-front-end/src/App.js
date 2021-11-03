import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Provider from './Context/Provider';

// Components \/
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
// Components /\

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
