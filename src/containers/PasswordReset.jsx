import React, { Component } from 'react'
import { Link } from 'react-router'
import store from '../store/store'
import { requestPasswordReset } from '../actions/actions'

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

  render() {
    return (
      <section className="container">
        <form>
          <div className="form-group">
            <input type="text" className={`form-control`} id="login-username" onChange={this.updateEmail.bind(this)}/>
          </div>
          <button type="button" className="btn btn-lg btn-success" onClick={this.sendReset.bind(this)}>Reset Password</button>
          <Link to="/" className="btn btn-danger btn-lg">Cancel</Link>
        </form>
      </section>
    )
  }
}

export default PasswordReset
