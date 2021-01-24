import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.css';

import HomePage from './Pages/home-page'

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' component={ HomePage } />
          </Switch>
      </Router>
  );
}

export default App;
