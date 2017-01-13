import React from 'react'

export default props => {
  const placeholder = props.isUsingGeolocation ? "Current Location" : "Search"
  return (
    <form className="inline-form" onSubmit={props.submitSearch}>
      <input type="text" placeholder={placeholder} onChange={props.updateSearchEntry}/>
      <button>Search</button>
    </form>
  )
}