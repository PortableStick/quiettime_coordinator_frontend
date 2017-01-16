import React, { Component } from 'react'
import UserInfoForm from '../components/UserInfoForm.jsx'
import store from '../store/store'
import { connect } from 'react-redux'
import { updateUserProfile, turnOffEditMode } from '../actions/actions'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameValue: this.props.user.username,
      emailValue: this.props.user.email,
      usernameError: '',
      emailError: ''
    }
  }

  saveInfo(event) {
    event.preventDefault()
    const updatedInfo = JSON.stringify({
      update: {
        username: this.state.usernameValue || this.props.user.username,
        email: this.state.emailValue || this.props.user.email
      }
    })
    const updateObj = {
      updatedInfo: updatedInfo,
      id: this.props.user.id
    }
    store.dispatch(updateUserProfile(updateObj))
    store.dispatch(turnOffEditMode())
  }

  cancelInfo() {
    this.setState({
      usernameValue: this.props.user.username,
      emailValue: this.props.user.email
    })
    store.dispatch(turnOffEditMode())
  }

  validateUsername(event) {
  }

  validateEmail(event) {
    if(!this.state.emailValue.match(/[\w\+\.]+\@\w{3,}\.\w+/)) {
      this.setState({
        emailError: 'Email is not in correct format (email@domain.com, email.address@domain.com, email+alias@domain.com)'
      })
    } else {
      this.setState({
        emailError: ''
      })
    }
  }

  updateUsername(event) {
    this.setState({
      usernameValue: event.target.value
    })
  }

  updateEmail(event) {
    this.setState({
      emailValue: event.target.value
    })
  }

  render() {
    return (
    <form >
      <UserInfoForm label="updateform"
                    username={this.state.usernameValue}
                    email={this.state.emailValue}
                    validateUsername={this.validateUsername.bind(this)}
                    validateEmail={this.validateEmail.bind(this)}
                    updateUsername={this.updateUsername.bind(this)}
                    updateEmail={this.updateEmail.bind(this)}
                    usernameError={this.state.usernameError}
                    emailError={this.state.emailError}/>
      <div className="form-group">
        <button type="button" className="btn btn-success" onClick={this.saveInfo.bind(this)}>Save</button>
        <button type="button" className="btn btn-danger" onClick={this.cancelInfo.bind(this)}>Cancel</button>
      </div>
    </form>
  )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(UserForm)