import React from 'react'
import { render } from 'react-dom'
import RootRouter from './RootRouter'
import { Provider } from 'react-redux'
import store from './store/store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './scss/main.scss'

window.onload = () => {
  injectTapEventPlugin()
  render(
    <MuiThemeProvider>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </MuiThemeProvider>
    , document.getElementById('app'))
}