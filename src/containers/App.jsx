import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar.jsx'
import * as Actions from '../actions/actions'
import store from '../store/store'

class App extends Component {

    constructor(props) {
      super(props)
    }

    logout() {
      store.dispatch(Actions.clearUserData())
      store.dispatch(Actions.logout())
      store.dispatch(Actions.endUserLogout())
    }

    render() {
      return(
        <div>
          <Navbar user={this.props.user} logout={this.logout.bind(this)}/>
          {this.props.children}
        </div>
      )
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(App)
