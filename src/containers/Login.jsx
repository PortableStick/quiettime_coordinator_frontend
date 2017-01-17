import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login, requestPasswordReset } from '../actions/actions'
import store from '../store/store'
import UserInfoForm from '../components/UserInfoForm.jsx'
import PasswordForm from '../components/PasswordForm.jsx'
import CancelButton from '../components/CancelButton.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import ForgottenPasswordButton from '../components/ForgottenPasswordButton.jsx'
import '../scss/login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameValue: "",
      passwordValue: "",
      usernameError: "",
      passwordError: ""
    }
  }

  updateUsername(event) {
    this.setState({
      usernameValue: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      passwordValue: event.target.value
    })
  }

  cancelLogin() {
    this.setState({
      usernameValue: '',
      passwordValue: ''
    })
  }

  validateUsername() {
    this.setState({
        usernameError: ""
      })
    if(this.state.usernameValue.length === 0) {
      this.setState({
        usernameError: "Username is required"
      })
      return false
    }
    return true
  }
  validatePassword() {
    this.setState({
        passwordError: ""
      })
    if(this.state.passwordValue.length === 0) {
      this.setState({
        passwordError: "Password is required"
      })
      return false
    }
    return true
  }

  formIsValid() {
    return (this.state.passwordError.length === 0 && this.state.usernameError.length === 0)
  }

  sendLogin(event) {
    event.preventDefault()
    if(this.validateUsername() && this.validatePassword()) {
      const loginObject = JSON.stringify({
        auth: {
          password: this.state.passwordValue,
          searchinfo: this.state.usernameValue
        }
      })
      store.dispatch(login(loginObject))
    }
  }

  render() {
    return(
      <section className="container">
        <UserInfoForm label="signupform"
                    usernameLabel="Username or Email"
                    username={this.state.usernameValue}
                    updateUsername={this.updateUsername.bind(this)}
                    usernameOnly={true}
                    usernameError={this.state.usernameError}
                    usernameFloatingLabelText="Username or Email"
                    />
        <PasswordForm label="password-reset"
                    updatePassword={this.updatePassword.bind(this)}
                    passwordValue={this.state.passwordValue}
                    passwordOnly={true}
                    passwordError={this.state.passwordError}
                    floatingLabelFixed={false}
                    />
        <PrimaryButton onClick={this.sendLogin.bind(this)}>Log In</PrimaryButton>
        <CancelButton cancel={this.cancelLogin.bind(this)} />
        <ForgottenPasswordButton>I Forgot My Password</ForgottenPasswordButton>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(mapStateToProps)(Login)