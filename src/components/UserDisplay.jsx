import React from 'react'
import DefaultButton from './DefaultButton.jsx'
export default props => {
  return (
    <form >
      <div className="form-group">
        <label htmlFor="user-name">Username: </label>
        <span>{props.user.username}</span>
      </div>
      <div className="form-group">
        <label htmlFor="user-email">Email: </label>
        <span>{props.user.email}</span>
      </div>
      <DefaultButton onClick={props.editInfo}>Edit</DefaultButton>
    </form>
  )
}