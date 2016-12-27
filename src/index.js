import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import Greeting2 from './components/Greeting2';
import App from './components/App';

require('./scss/main.scss');

window.onload = () => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="one" component={Greeting} />
        <Route path="two" component={Greeting2} />
      </Route>
    </Router>
    , document.getElementById('app'));
};