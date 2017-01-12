import React from 'react'

export default props => {
  return (
    <form >
      <div className="form-group">
        <label htmlFor="user-name">Username: </label>
        <span>{props.user.userName}</span>
      </div>
      <div className="form-group">
        <label htmlFor="user-email">Email: </label>
        <span>{props.user.email}</span>
      </div>
    </form>
  )
}