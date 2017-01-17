import React, { Component } from 'react'
import { Link } from 'react-router'
import store from '../store/store'
import { requestPasswordReset } from '../actions/actions'
import PrimaryButton from '../components/PrimaryButton.jsx'
import CancelButton from '../components/CancelButton.jsx'

class PasswordReset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  sendReset() {
    const info = JSON.stringify({ email: this.state.email})
    store.dispatch(requestPasswordReset(info))
  }

  cancelReset() {
    this.setState({
      email: ''
    })
  }

  render() {
    return (
      <section className="container">
        <form>
          <div className="form-group">
          <label htmlFor="login-username">
            Enter your email:
            </label>
            <input type="text" className={`form-control`} id="login-username" onChange={this.updateEmail.bind(this)}/>
            <PrimaryButton onClick={this.sendReset.bind(this)}>Reset Password</PrimaryButton>
            <CancelButton cancel={this.cancelReset.bind(this)}/>
          </div>
        </form>
      </section>
    )
  }
}

export default PasswordReset
