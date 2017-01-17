import React from 'react'
import DefaultButton from './DefaultButton.jsx'
import TextField from 'material-ui/TextField'

export default props =>
<div>
  <TextField disabled={true} floatingLabelText="Password" value="********" />
  <br />
  <DefaultButton onClick={props.enableEdit} >Update Password</DefaultButton>
</div>