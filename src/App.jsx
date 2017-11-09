import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/main.scss';
import Cards from './components/Cards';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Login from './components/Login';

const App = () => (
  <Router>
    <div className="container">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          component={Cards}
        />
        <Route
          exact
          path="/add-task"
          component={Form}
        />
        <Route
          exact
          path="login"
          component={Login}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
