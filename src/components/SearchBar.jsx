import React from 'react'

export default props => {
  const placeholder = props.isUsingGeolocation ? "Current Location" : "Search"
  return (
    <form className="inline-form">
      <input type="text" placeholder={placeholder} />
      <button>Search</button>
    </form>
  )
}