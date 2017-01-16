import React, {Component} from 'react'
import { connect } from 'react-redux'

class Confirmation extends Component {

    render() {
     return(<div>Confirm your email</div>)
    }
}

const mapStateTotProps = state => ({ user: state.user})

export default connect(mapStateTotProps)(Confirmation)
