import React from 'react'

export default props =>
  <div>
    <div className="form-group">
      <label htmlFor={`${props.label}-username`}>Username</label>
      <input type="text" id={`${props.label}-username`}
            value={props.username}
            onChange={props.updateUsername}
            onBlur={props.validateUsername}/>
      <div className="error-message">{props.usernameError}</div>
    </div>
    <div className="form-group">
      <label htmlFor={`${props.label}-email`}>Email</label>
      <input type="text" id={`${props.label}-email`}
            value={props.email}
            onChange={props.updateEmail}
            onBlur={props.validateEmail}/>
      <div className="error-message">{props.emailError}</div>
    </div>
  </div>