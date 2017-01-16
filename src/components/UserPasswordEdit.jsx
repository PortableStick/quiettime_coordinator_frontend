import React from 'react'
import UserPassword from '../containers/UserPassword.jsx'
import EditPasswordButton from './EditPasswordButton.jsx'

export default props => {
  if(props.editPasswordMode) {
    return(<UserPassword />)
  } else {
    return(<EditPasswordButton enableEdit={props.enableEdit}/>)
  }
}