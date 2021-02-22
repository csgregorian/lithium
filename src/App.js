import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserForm } from './Components/UserForm';
import { AirtableTest } from './Pages/AirtableTest';
import GraphTest from './Pages/GraphTest';
import PerformanceTest from './Pages/PerformanceTest';
import SimulatorTest from './Pages/SimulatorTest';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/airtable" component={AirtableTest}></Route>
          <Route exact path="/graph" component={GraphTest}></Route>
          <Route exact path="/simulator" component={SimulatorTest}></Route>
          <Route exact path="/performance" component={PerformanceTest}></Route>
          <Route path="/" component={UserForm}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
