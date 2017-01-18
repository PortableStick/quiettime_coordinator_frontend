import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import UserPlans from '../components/UserPlans.jsx'
import UserPasswordEditSwitch from '../components/UserPasswordEditSwitch.jsx'
import UserInfoEditSwitch from '../components/UserInfoEditSwitch.jsx'
import ConfirmationButton from '../components/ConfirmationButton.jsx'
import Model from 'react-modal'
import Divider from 'material-ui/Divider'

import store from '../store/store.js'
import * as Actions from '../actions/actions.js'
import LogoutModal from '../components/LogoutModal.jsx'
import CancelButton from '../components/CancelButton.jsx'

import '../scss/user.scss'

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

    openModal() {
      store.dispatch(Actions.confirmUserLogout())
    }

    closeModal() {
      store.dispatch(Actions.endUserLogout())
    }

    logout() {
      store.dispatch(Actions.clearUserData())
      store.dispatch(Actions.logout())
      store.dispatch(Actions.endUserLogout())
    }

    editInfo() {
      store.dispatch(Actions.turnOnEditMode())
    }

    editPassword() {
      store.dispatch(Actions.turnOnPasswordEditMode())
    }

    sendUserConfirmation() {
      store.dispatch(Actions.sendUserConfirmation(this.props.user.id))
    }

    removeAttending(id) {
      const updateObj = {
        id: id,
        updateData: JSON.stringify({
          update: {
            yelp_id: location
          }
        })
      }
      store.dispatch(Actions.removeLocationFromUser(updateObj))
    }

    componentWillMount() {
      if(!this.props.user.loggedIn) {
        browserHistory.push('/login')
      }
    }

    render() {
      return(
        <section id="profile">
          <h1>Profile</h1>
          <Divider />
          <UserInfoEditSwitch editMode={this.props.ui.editMode} editInfo={this.editInfo.bind(this)} user={this.props.user}/>
          <UserPasswordEditSwitch editPasswordMode={this.props.ui.passwordEditMode} enableEdit={this.editPassword.bind(this)} />
          { this.props.ui.userConfirmed ? null :
              <div>
                <ConfirmationButton confirmation={this.sendUserConfirmation.bind(this)}>Send new confirmation</ConfirmationButton>
              </div>
          }
          <UserPlans user={this.props.user} removeAttending={this.removeAttending.bind(this)}/>
          <CancelButton destination="/me" cancel={this.openModal.bind(this)}>Logout</CancelButton>
          <LogoutModal logout={this.logout}
                      closeModal={this.closeModal}
                      isOpen={this.props.ui.showLogoutModal}
                      />
        </section>
      )
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(User)
