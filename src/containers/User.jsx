import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import UserForm from '../components/UserForm.jsx'
import UserPlans from '../components/UserPlans.jsx'
import UserDisplay from '../components/UserDisplay.jsx'
import UserPassword from '../components/UserPassword.jsx'

import store from '../store/store.js'
import * as actions from '../actions/actions.js'

class User extends Component {

    constructor(props) {
      super(props)
    }

    saveInfo() {
      store.dispatch(actions.turnOffEditMode())
    }

    editInfo() {
      store.dispatch(actions.turnOnEditMode())
    }

    cancelInfo() {
      store.dispatch(actions.turnOffEditMode())
    }

    savePassword() {
      store.dispatch(actions.turnOffPasswordEditMode())
    }

    editPassword() {
      store.dispatch(actions.turnOnPasswordEditMode())
    }

    cancelPassword() {
      store.dispatch(actions.turnOffPasswordEditMode())
    }

    componentWillMount() {
      if(!this.props.user.loggedIn) {
        browserHistory.push('/login')
      }
    }

    render() {
      if(this.props.ui.error) {
        console.error(this.props.ui.error)
      }
      return(
        <div>
          <h1>User Info</h1>
          { this.props.ui.editMode ? <UserForm user={this.props.user} /> : <UserDisplay user={this.props.user}/>}
          { this.props.ui.editMode ? <div><button type="button" className="btn btn-success" onClick={this.saveInfo}>Save</button><button type="button" className="btn btn-danger" onClick={this.cancelInfo}>Cancel</button></div> : <button type="button" className="btn btn-default" onClick={this.editInfo}>Edit</button>}
          <UserPassword passwordEditMode={this.props.ui.passwordEditMode} enableEdit={this.editPassword} stopEdit={this.savePassword} cancelEdit={this.cancelPassword} />
          { this.props.ui.userConfirmed ? null : <button className="btn btn-warning">Send new confirmation</button>}
          <UserPlans user={this.props.user} />
        </div>
      )
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(User)
