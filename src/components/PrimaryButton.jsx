import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default props =><RaisedButton primary={true} onClick={props.onClick}>{props.children}</RaisedButton>