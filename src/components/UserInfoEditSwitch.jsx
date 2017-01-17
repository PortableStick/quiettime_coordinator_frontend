import React from 'react'
import UserForm from '../containers/UserForm.jsx'
import UserDisplay from '../components/UserDisplay.jsx'

export default props => (props.editMode ? <UserForm user={props.user} /> : <UserDisplay user={props.user} editInfo={props.editInfo} /> )