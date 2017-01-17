import React from 'react'

export default props => <button type="submit" className="btn btn-success btn-lg" onClick={props.click}>{props.children}</button>