import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import FavTeam from './components/FavTeam/FavTeam';

import './App.css';

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home />}
          />
          <Route
            path="/favteams"
            exact
            component={() => <FavTeam  />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
