import React from 'react'

export default props => {
  return (
    <form >
      <div className="form-group">
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" placeholder={props.user.userName} />
      </div>
      <div className="form-group">
        <label htmlFor="user-email">Email</label>
        <input type="text" id="user-name" placeholder={props.user.email} />
      </div>
    </form>
  )
}