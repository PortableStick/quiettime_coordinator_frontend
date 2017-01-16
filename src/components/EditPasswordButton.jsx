import React from 'react'

export default props => <form className="form-inline">
    <label htmlFor="current-password">Current Password</label>
    <input type="password" placeholder="*********" disabled="true" id="current-password"/>
    <button type="button" className="btn btn-default" onClick={props.enableEdit} >Update Password</button>
    </form>