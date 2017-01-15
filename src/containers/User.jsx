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
      this.state = {
        newUsername: "",
        newEmail: "",
        newPassword: "",
        newPasswordConfirmation: ""
      }
    }

    logout() {
      store.dispatch(actions.clearUserData())
      store.dispatch(actions.logout())
    }

    saveInfo() {
      const updatedInfo = JSON.stringify({
        update: {
          username: this.state.newUsername || this.props.user.username,
          email: this.state.newEmail || this.props.user.email
        }
      })
      const updateObj = {
        updatedInfo: updatedInfo,
        id: this.props.user.id
      }
      console.log(updateObj)
      store.dispatch(actions.updateUserProfile(updateObj))
      store.dispatch(actions.turnOffEditMode())
    }

    editInfo() {
      store.dispatch(actions.turnOnEditMode())
    }

    cancelInfo() {
      store.dispatch(actions.turnOffEditMode())
    }

    savePassword() {
      if(this.state.newPassword !== this.state.newPasswordConfirmation) {
        return
      }
      const updatedInfo = JSON.stringify({
        update: {
          password: this.state.newPassword,
          password_confirmation: this.state.newPasswordConfirmation
        }
      })
      const updateObj = {
        updatedInfo: updatedInfo,
        id: this.props.user.id
      }
      store.dispatch(actions.updateUserProfile(updateObj))
      store.dispatch(actions.turnOffPasswordEditMode())
    }

    editPassword() {
      store.dispatch(actions.turnOnPasswordEditMode())
    }

    cancelPassword() {
      store.dispatch(actions.turnOffPasswordEditMode())
    }

    updateUsername(event) {
      this.setState({
        newUsername: event.target.value
      })
    }

    updateEmail(event) {
      this.setState({
        newEmail: event.target.value
      })
    }

    updatePassword(event) {
      this.setState({
        newPassword: event.target.value
      })
    }

    updatePasswordConfirmation(event) {
      this.setState({
        newPasswordConfirmation: event.target.value
      })
    }

    sendUserConfirmation() {
      store.dispatch(actions.sendUserConfirmation())
    }

    componentWillMount() {
      if(!this.props.user.loggedIn) {
        browserHistory.push('/login')
      }
    }

    render() {
      // if(this.props.ui.error) {
      //   console.error(this.props.ui.error)
      // }
      return(
        <section className="container">
          <h1>User Info</h1>
          { this.props.ui.editMode ? <UserForm user={this.props.user} updateUsername={this.updateUsername.bind(this)} updateEmail={this.updateEmail.bind(this) } /> : <UserDisplay user={this.props.user}  /> }
          { this.props.ui.editMode ? <div><button type="button" className="btn btn-success" onClick={this.saveInfo.bind(this)}>Save</button><button type="button" className="btn btn-danger" onClick={this.cancelInfo.bind(this)}>Cancel</button></div> : <button type="button" className="btn btn-default" onClick={this.editInfo}>Edit</button>}
          <UserPassword
              passwordEditMode={this.props.ui.passwordEditMode}
              enableEdit={this.editPassword.bind(this)}
              stopEdit={this.savePassword.bind(this)}
              cancelEdit={this.cancelPassword.bind(this)}
              updatePassword={this.updatePassword.bind(this)}
              updatePasswordConfirmation={this.updatePasswordConfirmation.bind(this)}
              />
          { this.props.ui.userConfirmed ? null : <button className="btn btn-warning" onClick={this.sendUserConfirmation.bind(this)}>Send new confirmation</button>}
          <UserPlans user={this.props.user} />
          <button type="button" className="btn btn-danger" onClick={this.logout.bind(this)}>Logout</button>
        </section>
      )
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(User)
