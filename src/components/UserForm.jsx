import React from 'react'

export default props => {
  const { updateUsername, updateEmail } = props
  return (
    <form >
      <div className="form-group">
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" placeholder={props.user.username} onChange={updateUsername}/>
      </div>
      <div className="form-group">
        <label htmlFor="user-email">Email</label>
        <input type="text" id="user-name" placeholder={props.user.email} onChange={updateEmail}/>
      </div>
    </form>
  )
}