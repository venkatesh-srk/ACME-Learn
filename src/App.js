import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.sass';

import Login from "./Pages/login";
import HomePage from './Pages/home-page';
import CoursesPage from "./Pages/courses-page";

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path='/sign-in' component={ Login } />
                  <Route exact path='/courses' component={ CoursesPage } />
                  <Route path='*' component={ HomePage } />
              </Switch>
          </Router>
      </>
  );
}

export default App;
