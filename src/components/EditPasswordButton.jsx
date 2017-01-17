import React from 'react'
import DefaultButton from './DefaultButton.jsx'
export default props => <form className="form-inline">
    <label htmlFor="current-password">Current Password</label>
    <input type="password" placeholder="*********" disabled="true" id="current-password"/>
    <DefaultButton onClick={props.enableEdit} >Update Password</DefaultButton>
    </form>