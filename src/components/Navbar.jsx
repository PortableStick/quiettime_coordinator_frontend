import React from 'react';
import { Link } from 'react-router';

export default props => {
  const { userName } = props.user;
  return (
    <nav>
      QuietTime Coordinator
      <span>{userName}</span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/me">User</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}