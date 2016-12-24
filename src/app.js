import React from 'react';
import { render } from 'react-dom';
import Greeting from './components/Greeting';

require('./scss/main.scss');

window.onload = () => {
  render(<Greeting />, document.getElementById('app'));
};