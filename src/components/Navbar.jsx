import React from 'react'
import { Link } from 'react-router'
import Bootstrap from 'bootstrap'

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
        <li>{loggedIn ? <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><Link to="/me">Profile</Link></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Logout</a></li>
  </ul>
</div> : <Link to="/login">Login</Link>}</li>
        <li>{loggedIn ? null : <Link to="/signup">Sign Up</Link>}</li>
      </ul>
    </nav>
  )
}