import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';
import Joke from './components/pages/Joke';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/jokes/:category" component={Joke}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
