import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default props => <RaisedButton onClick={props.confirmation}>{props.children}</RaisedButton>