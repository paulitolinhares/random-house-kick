import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Joke from './components/pages/Joke';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/jokes/:category" component={Joke}/>
    </Switch>
  </BrowserRouter>
);

export default App;
