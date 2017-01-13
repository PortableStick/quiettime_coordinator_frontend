import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login } from '../actions/actions'
import store from '../store/store'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  sendLogin(event) {
    event.preventDefault()
    const loginObject = {
      auth: {
        password: this.password.value,
        searchinfo: this.userName.value
      }
    }
    store.dispatch(login(JSON.stringify(loginObject)))
  }

  render() {
    if(this.props.ui.error) {
      console.error(this.props.ui.error)
    }
    return(
      <section className="container">
        <form>
          <div className="form-group">
            <label htmlFor="login-username">Username or email: </label>
            <input type="text" className="form-control" id="login-username" ref={input => this.userName = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input type="password" className="form-control" id="login-password" ref={input => this.password = input}/>
          </div>
          <button type="submit" className="btn btn-success btn-lg" onClick={this.sendLogin.bind(this)}>Log In</button>
          <Link to="/" className="btn btn-danger btn-lg">Cancel</Link>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui,
  searches: state.searches
})

export default connect(mapStateToProps)(Login)