import React, { Component } from 'react'
import store from '../store/store'
import { signup } from '../actions/actions'
import { Link } from 'react-router'
import PasswordForm from '../components/PasswordForm.jsx'
import UserInfoForm from '../components/UserInfoForm.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import CancelButton from '../components/CancelButton.jsx'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameValue: "",
      emailValue: "",
      passwordValue: "",
      passwordConfirmationValue: "",
      usernameError: '',
      emailError: '',
      passwordError: ''
    }
  }

  validateUsername() {
    this.setState({
        usernameError: '',
      })
    if(this.state.usernameValue.length === 0) {
      this.setState({
        usernameError: 'Username is required',
      })
    }
  }

  validateEmail() {
    this.setState({
        emailError: ''
      })
    if(this.state.emailValue.length === 0) {
      this.setState({
        emailError: 'Email is required'
      })
    } else if(!this.state.emailValue.match(/[\w\+\.]+\@\w{3,}\.\w+/)) {
      this.setState({
        emailError: 'Email is not in correct format (email@domain.com, email.address@domain.com, email+alias@domain.com)'
      })
    }
  }

  validatePasswords(event) {
    this.setState({
        passwordError: ''
      })
    if(this.state.passwordValue.length === 0) {
      this.setState({
        passwordError: 'Password is required'
      })
    } else if(this.state.passwordValue.length < 8) {
      this.setState({
        passwordError: 'Password must be at least 8 characters'
      })
    } else if(this.state.passwordValue !== this.state.passwordConfirmationValue) {
      this.setState({
        passwordError: 'Passwords must match'
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

  updateUserPassword(event) {
    this.setState({
      passwordValue: event.target.value
    })
  }

  updateUserPasswordConfirmation(event) {
    this.setState({
      passwordConfirmationValue: event.target.value
    })
  }

  formIsValid() {
    return this.state.usernameError === '' && this.state.passwordError  === '' && this.state.emailError === ''
  }

  cancelSignup() {
    this.setState({
      usernameValue: "",
      emailValue: "",
      passwordValue: "",
      passwordConfirmationValue: "",
      usernameError: '',
      emailError: '',
      passwordError: ''
    })
  }

  submitSignup(event) {
    event.preventDefault()
    this.validateUsername()
    this.validateEmail()
    this.validatePasswords()
    if(this.formIsValid()) {
      const signupObj = JSON.stringify({
        user: {
          username: this.state.usernameValue,
          email: this.state.emailValue,
          password: this.state.passwordValue,
          password_confirmation: this.state.passwordConfirmationValue
        }
      })
      store.dispatch(signup(signupObj))
    }
  }

  render() {
    return(
      <section className="container">
          <UserInfoForm label="signupform"
                    username={this.state.usernameValue}
                    email={this.state.emailValue}
                    validateUsername={this.validateUsername.bind(this)}
                    validateEmail={this.validateEmail.bind(this)}
                    updateUsername={this.updateUsername.bind(this)}
                    updateEmail={this.updateEmail.bind(this)}
                    usernameError={this.state.usernameError}
                    emailError={this.state.emailError}
                    />
          <PasswordForm label="password-reset"
                      passwordUpdate={this.updateUserPassword.bind(this)}
                      passwordConfirmationUpdate={this.updateUserPasswordConfirmation.bind(this)}
                      passwordError={this.state.passwordError}
                      validatePasswords={this.validatePasswords.bind(this)}
                      passwordValue={this.state.passwordValue}
                      passwordConfirmationValue={this.state.passwordConfirmationValue}
                      />
          <PrimaryButton onClick={this.submitSignup.bind(this)}>Signup</PrimaryButton>
          <CancelButton cancel={this.cancelSignup.bind(this)}/>
      </section>
    )
  }
}

export default Signup