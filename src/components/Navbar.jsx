import React from 'react'
import { Link } from 'react-router'

import '../scss/navbar.scss'

export default props => {
  const { username, loggedIn } = props.user
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">QuietTime Coordinator</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/search">Search</Link></li>
        <li>{loggedIn ? <Link to="/me">{username}</Link> : <Link to="/login">Login</Link>}</li>
        <li>{loggedIn ? null : <Link to="/signup">Sign Up</Link>}</li>
      </ul>
    </nav>
  )
}