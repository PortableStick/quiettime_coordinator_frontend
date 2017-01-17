import React from 'react'
import TextField from 'material-ui/TextField'

export default props =>
<div>
  <TextField hintText={props.usernameLabel || "Username"}
            floatingLabelText={props.usernameFloatingLabelText || "Username"}
            value={props.username}
            onChange={props.updateUsername}
            onBlur={props.validateUsername}
            errorText={props.usernameError}
            type="text"
            />
  <div className={`${props.usernameOnly === true  ? ' hidden' : ''}`}>
      <TextField hintText={props.emailLabel || "Email"}
              floatingLabelText={props.emailFloatingLabelText || "Email"}
              value={props.email}
              onChange={props.updateEmail}
              onBlur={props.validateEmail}
              errorText={props.emailError}
              type="email"
              />
  </div>
</div>