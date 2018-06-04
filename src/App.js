import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Joke from './components/pages/Joke';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/jokes/:category" component={Joke}/>
    </Switch>
  </BrowserRouter>
);

export default App;
