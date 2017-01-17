import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

export default props => <RaisedButton secondary={true} containerElement={<Link to={props.destination || "/"} />} onClick={props.cancel}>{props.children || "Cancel"}</RaisedButton>

