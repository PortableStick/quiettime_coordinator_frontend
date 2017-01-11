import React from 'react';
import { render } from 'react-dom';
import RootRouter from './RootRouter';
import { Provider } from 'react-redux';
import store from './store/store';

import '../node_modules/bootstrap/less/bootstrap.less'
import './scss/main.scss';

window.onload = () => {
  render(
    <Provider store={store}>
      <RootRouter />
    </Provider>
    , document.getElementById('app'));
};