import React from 'react';

export default props => {
  const { userName } = props.user;
  return (
    <nav>
      QuietTime Coordinator
      <span>{userName}</span>
    </nav>
  );
}