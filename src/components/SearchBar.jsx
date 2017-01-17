import React from 'react'
import DefaultButton from './DefaultButton.jsx'
import TextField from 'material-ui/TextField'

export default props => {
  const placeholder = props.isUsingGeolocation ? "Current Location" : "Search"
  return (
    <form className="inline-form" onSubmit={props.submitSearch}>
      <TextField hintText={placeholder} onChange={props.updateSearchEntry} />
      <DefaultButton onClick={props.submitSearch}>Search</DefaultButton>
    </form>
  )
}