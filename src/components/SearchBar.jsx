import React from 'react'
import DefaultButton from './DefaultButton.jsx'
export default props => {
  const placeholder = props.isUsingGeolocation ? "Current Location" : "Search"
  return (
    <form className="inline-form">
      <input type="text" className="form-control" placeholder={placeholder} onChange={props.updateSearchEntry}/>
      <DefaultButton onClick={props.submitSearch}>Search</DefaultButton>
    </form>
  )
}