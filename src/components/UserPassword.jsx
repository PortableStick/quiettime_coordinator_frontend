import React from 'react'

export default props => {
  const { passwordEditMode, stopEdit, enableEdit, cancelEdit } = props
  const passwordForm = <div>
    <form className="form-inline">
      <label htmlFor="password-change">New Password</label>
      <input type="password" className="form-control" id="password-change" placeholder="new password"/>
      <label htmlFor="password-change-confirmation">Confirm New Password</label>
      <input type="password" className="form-control" id="password-change-confirmation"/>
    </form>
    <form className="form-inline">
      <button type="button" className="btn btn-success" onClick={stopEdit}>Save</button>
      <button type="button" className="btn btn-danger" onClick={cancelEdit}>Cancel</button>
    </form>
    </div>
  const editButton = <form className="form-inline">
  <label htmlFor="">Current Password</label>
  <input type="password" placeholder="*********" disabled="true" />
  <button type="button" className="btn btn-default" onClick={enableEdit}>Update Password</button>
  </form>

  if(passwordEditMode) {
    return(passwordForm)
  } else {
    return(editButton)
  }
}