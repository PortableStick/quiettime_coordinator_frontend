import React from 'react'

export default props =>
  <div>
    <div className="form-group">
      <label htmlFor={`${props.label}-username`}>{props.usernameLabel || "Username"}</label>
      <input type="text" id={`${props.label}-username`}
            value={props.username}
            onChange={props.updateUsername}
            onBlur={props.validateUsername}
            className={`form-control ${props.usernameError ? "error" : ""}`}
            />
      <div className="error-message">{props.usernameError}</div>
    </div>
    <div className={`form-group ${props.usernameOnly === true  ? ' hidden' : ''}`}>
      <label htmlFor={`${props.label}-email`}>{props.emailLabel || "Email"}</label>
      <input type="text" id={`${props.label}-email`}
            value={props.email}
            onChange={props.updateEmail}
            onBlur={props.validateEmail}
            className={`form-control ${props.emailError ? "error" : ""}`}
            />
      <div className="error-message">{props.emailError}</div>
    </div>
  </div>