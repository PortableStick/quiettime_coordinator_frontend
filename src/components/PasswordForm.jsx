import React from 'react'
import TextField from 'material-ui/TextField'

export default props =>
<div>
  <TextField hintText={props.passwordLabel || "Password"}
            floatingLabelText={props.passwordFloatingLabelText || "Password"}
            value={props.passwordValue}
            onChange={props.updatePassword}
            onBlur={props.validatePasswords}
            errorText={props.passwordError}
            floatingLabelFixed={props.floatingLabelFixed}
            type="password"
            />
    <div className={`${props.passwordOnly === true  ? ' hidden' : ''}`}>
      <TextField hintText={props.passwordConfirmationLabel || "Confirm Password"}
              floatingLabelText={props.passwordConfirmationFloatingLabelText || "Password Confirmation"}
              value={props.passwordConfirmationValue}
              onChange={props.updatePasswordConfirmation}
              onBlur={props.validatePasswords}
              errorText={props.passwordError}
              floatingLabelFixed={props.floatingLabelFixed}
              type="password"
              />
    </div>
</div>