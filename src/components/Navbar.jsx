import React from 'react'
import { Link } from 'react-router'

import '../scss/navbar.scss'

export default props => {
  const { username } = props.user
  const userLink = props.user.loggedIn ? <li><Link to="/me">{username}</Link></li> : <li><Link to="/login">Login</Link></li>
  const signupLink = props.user.loggedIn ? null : <li><Link to="/signup">Sign Up</Link></li>
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">QuietTime Coordinator</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/search">Search</Link></li>
        {userLink}
        {signupLink}
      </ul>
    </nav>
  )
}