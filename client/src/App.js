import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/HomePage';
import Create from './pages/CreatePage';
import Display from './pages/DisplayPage';
import Update from './pages/UpdatePage';
import Delete from './pages/DeletePage';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {

  return (
    // <Create />

    <Router>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Create} />
        <Route path="/display" exact component={Display} />
        <Route path="/edit" exact component={Update} />
        <Route path="/delete" exact component={Delete} />

      </Switch>
    </Router>
  );
}

export default App;
