import React from 'react'
import { Link } from 'react-router'

export default props => <Link to={props.destination || "/"} className="btn btn-danger btn-lg" onClick={props.cancel}>{props.children || "Cancel"}</Link>