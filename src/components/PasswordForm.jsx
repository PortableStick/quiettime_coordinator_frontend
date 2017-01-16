import React from 'react'

export default props =>
<div className="form-group">
  <label htmlFor={`${props.label}-password`}>Password</label>
  <input type="password"
        className={`form-control ${props.passwordError ? 'error' : ''}`}
        id={`${props.label}-password`}
        onChange={props.passwordUpdate}
        onBlur={props.validatePasswords}
        value={props.passwordValue} />
  <label htmlFor={`${props.label}-confirmation`}>Password Confirmation</label>
  <input type="password"
        className={`form-control ${props.passwordError ? 'error' : ''}`}
        id={`${props.label}-confirmation`}
        onChange={props.passwordConfirmationUpdate}
        onBlur={props.validatePasswords}
        value={props.passwordConfirmationValue} />
  <div className="error-message">{props.passwordError}</div>
</div>