import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Landing from './components/Landing.jsx'
import App from './containers/App.jsx'
import Search from './containers/Search.jsx'
import User from './containers/User.jsx'
import Signup from './containers/Signup.jsx'
import Login from './containers/Login.jsx'
import PasswordReset from './containers/PasswordReset.jsx'
import Confirmation from './containers/Confirmation.jsx'
import ResetPassword from './containers/ResetPassword.jsx'

export default props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="search" component={Search} />
        <Route path="me" component={User} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="reset" component={PasswordReset} />
      </Route>
      <Route path="/confirm/:confirmationKey" component={Confirmation} />
      <Route path="/reset/:resetKey" component={ResetPassword} />
    </Router>
  )
}