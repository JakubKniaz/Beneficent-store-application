import React from 'react';
import logo from './logo.svg';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
