import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import UserPlans from '../components/UserPlans.jsx'
import UserPasswordEdit from '../components/UserPasswordEdit.jsx'
import UserInfoEdit from '../components/UserInfoEdit.jsx'
import ConfirmationButton from '../components/ConfirmationButton.jsx'

import store from '../store/store.js'
import * as Actions from '../actions/actions.js'

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

    invalidPassword(event) {
      console.log("Password sucks!")
    }

    logout() {
      store.dispatch(Actions.clearUserData())
      store.dispatch(Actions.logout())
    }

    saveInfo(event) {
      event.preventDefault()
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
      store.dispatch(Actions.updateUserProfile(updateObj))
      store.dispatch(Actions.turnOffEditMode())
    }

    editInfo() {
      store.dispatch(Actions.turnOnEditMode())
    }

    cancelInfo() {
      this.setState({
        newUsername: "",
        newEmail: ""
      })
      store.dispatch(Actions.turnOffEditMode())
    }

    savePassword(event) {
      event.preventDefault()
      console.log(event.target)
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
      // store.dispatch(Actions.updateUserProfile(updateObj))
      // store.dispatch(Actions.turnOffPasswordEditMode())
    }

    editPassword() {
      store.dispatch(Actions.turnOnPasswordEditMode())
    }

    cancelPassword() {
      this.setState({
        newPassword: "",
        newPasswordConfirmation: ""
      })
      store.dispatch(Actions.turnOffPasswordEditMode())
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
      store.dispatch(Actions.sendUserConfirmation(this.props.user.id))
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
          <UserInfoEdit editMode={this.props.ui.editMode} editInfo={this.editInfo.bind(this)} user={this.props.user}/>

          { this.props.ui.userConfirmed ? null : <button className="btn btn-warning" onClick={this.sendUserConfirmation.bind(this)}>Send new confirmation</button>}
          <UserPasswordEdit editPasswordMode={this.props.ui.passwordEditMode}
              enableEdit={this.editPassword.bind(this)} />
          <UserPlans user={this.props.user} />
          <button type="button" className="btn btn-danger" onClick={this.logout.bind(this)}>Logout</button>
        </section>
      )
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(User)
