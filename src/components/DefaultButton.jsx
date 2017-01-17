import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default props => <RaisedButton onClick={props.onClick}>{props.children}</RaisedButton>