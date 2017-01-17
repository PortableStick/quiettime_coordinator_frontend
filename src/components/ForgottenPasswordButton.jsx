import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

export default props => <RaisedButton containerElement={<Link to="/reset" />}>{props.children}</RaisedButton>
