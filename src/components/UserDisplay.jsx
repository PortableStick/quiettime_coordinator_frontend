import React from 'react'
import DefaultButton from './DefaultButton.jsx'
import TextField from 'material-ui/TextField'

export default props =>
<div>
  <TextField disabled={true} floatingLabelText="Username" value={props.user.username} />
  <br />
  <TextField disabled={true} floatingLabelText="Email" value={props.user.email} />
  <br />
  <DefaultButton onClick={props.editInfo}>Edit Info</DefaultButton>
</div>