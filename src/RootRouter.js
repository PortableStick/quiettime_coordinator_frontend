import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Landing from './components/Landing.jsx';
import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import User from './containers/User.jsx';

export default props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="search" component={Search} />
        <Route path="me" component={User} />
      </Route>
    </Router>
  );
}