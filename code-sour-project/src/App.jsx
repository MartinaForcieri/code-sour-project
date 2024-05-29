
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import TableItem from './components/tableItem';
import TableCategory from './components/tableCategory';
import ParentComponent from './components/parentComponent';

const App = () => {
  return (
    <Router>
          <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/tableitem" component={TableItem} />
        <Route exact path="/tableCategory" component={TableCategory} />
        <Route exact path="/parentComponent" component={ParentComponent} />
      </Switch>
    </Router>
  );
};

export default App;
