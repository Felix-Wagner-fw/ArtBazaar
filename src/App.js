import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import ItemDetail from './screens/ItemDetail';
import Profile from './screens/Profile';
import Exhibition from './screens/Exhibition';
// Import other components and screens as needed

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item/:id" component={ItemDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/exhibition" component={Exhibition} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
