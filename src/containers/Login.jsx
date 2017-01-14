import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login } from '../actions/actions'
import store from '../store/store'
import '../scss/login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchinfo: "",
      password: ""
    }
  }

  updateSearchinfo(event) {
    this.setState({
      searchinfo: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  sendLogin(event) {
    event.preventDefault()
    const loginObject = {
      auth: {
        password: this.state.password,
        searchinfo: this.state.searchinfo
      }
    }
    store.dispatch(login(JSON.stringify(loginObject)))
  }

  render() {
    const errorClass = this.props.ui.error ? "error" : ""
    const errorMessage = (this.props.ui.error && this.props.ui.error.status === 401) ?
                          <div className="error">Invalid username or password</div>
                          :
                          <div className="error">{"" && this.props.ui.error.message}</div>

    if(this.props.ui.error) {
      console.error(this.props.ui.error)
    }
    return(
      <section className="container">
        <form>
          <div className="form-group">
            <label htmlFor="login-username">Username or email: </label>
            <input type="text" className={`form-control ${errorClass}`} id="login-username" ref={input => this.userName = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input type="password" className={`form-control ${errorClass}`} id="login-password" ref={input => this.password = input}/>
          </div>
          <button type="submit" className="btn btn-success btn-lg" onClick={this.sendLogin.bind(this)}>Log In</button>
          <Link to="/" className="btn btn-danger btn-lg">Cancel</Link>
        </form>
        {errorMessage}
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