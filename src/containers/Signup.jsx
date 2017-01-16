import React, { Component } from 'react'
import store from '../store/store'
import { signup } from '../actions/actions'
import { Link } from 'react-router'
import PasswordForm from '../components/PasswordForm.jsx'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      usernameError: false,
      emailError: false,
      passwordError: false
    }
  }

  validateUsername(event) {
    if(this.state.username.length > 0) {
      this.passwordInput.setCustomValidity("")
      this.setState({
        usernameError: false,
      })
    } else {
      this.usernameInput.setCustomValidity("Username is required")
      this.setState({
        usernameError: true,
      })
    }
  }

  validateEmail(event) {
    if(this.state.email.length === 0) {
      this.emailInput.setCustomValidity("Email is required")
      this.setState({
        emailError: true
      })
    } else if(!this.state.email.match(/[\w\+\.]+\@\w{3,}\.\w+/)) {
      this.emailInput.setCustomValidity("Not a valid email address (name@domain.com)")
      this.setState({
        emailError: true
      })
    } else {
      this.passwordInput.setCustomValidity("")
      this.setState({
        emailError: false
      })
    }
  }

  validatePasswords(event) {
    if(this.state.password.length === 0) {
      this.passwordInput.setCustomValidity("Password is required")
      this.setState({
        passwordError: false
      })
    } else if(this.state.password.length < 8) {
      this.passwordInput.setCustomValidity("Password must be at least 8 characters")
      this.setState({
        passwordError: false
      })
    } else if(this.state.password !== this.state.passwordConfirmation) {
      this.passwordInput.setCustomValidity("Passwords must match")
      this.setState({
        passwordError: true
      })
    } else {
      this.passwordInput.setCustomValidity("")
      this.setState({
        passwordError: false
      })
    }
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  updateUserEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  updateUserPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  updateUserPasswordConfirmation(event) {
    this.setState({
      passwordConfirmation: event.target.value
    })
  }

  formIsValid() {
    return !(this.state.usernameError && this.state.passwordError && this.state.emailError)
  }

  resetState() {
    this.setState({
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      validation: false,
      usernameError: false,
      emailError: false,
      passwordError: false
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
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
      })
      store.dispatch(signup(signupObj))
    }
  }

  render() {
    return(
      <section className="container">
        <form onSubmit={this.submitSignup.bind(this)}>
          <div className="form-group">
            <label htmlFor="signup-username">Username: </label>
            <input type="text" className={"form-control" + (this.state.usernameError ?" error" : '')}  id="signup-username" onChange={this.updateUsername.bind(this)} ref={input => this.usernameInput = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email: </label>
            <input type="email" className={"form-control" + (this.state.emailError ?" error" : '')} id="signup-email" onChange={this.updateUserEmail.bind(this)} onBlur={this.validateEmail.bind(this)} ref={input => this.emailInput = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input type="password" className={"form-control" + (this.state.passwordError ?" error" : '')} id="signup-password" onChange={this.updateUserPassword.bind(this)} onBlur={this.validatePasswords.bind(this)} ref={input => this.passwordInput = input }/>
            <label htmlFor="signup-confirmation">Password Confirmation</label>
            <input type="password" className={"form-control" + (this.state.passwordError ? " error" : '')} id="signup-confirmation" onChange={this.updateUserPasswordConfirmation.bind(this)} onBlur={this.validatePasswords.bind(this)} ref={input => this.passwordConfirmationInput = input } />
          </div>
          <button type="submit" className="btn btn-success btn-lg">Signup</button>
          <Link to="/" onClick={this.resetState.bind(this)} className="btn btn-danger btn-lg">Cancel</Link>
        </form>
      </section>
    )
  }
}

export default Signup