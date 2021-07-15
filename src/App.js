import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import FavTeam from './components/FavTeam/FavTeam';
import Footer from './components/Footer/Footer';
import './App.css';
import LiveScore from './components/LiveScore/LiveScore';

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
           <Route
            path="/livescore"
            exact
            component={() => <LiveScore />}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
