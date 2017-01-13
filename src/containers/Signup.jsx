import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return(
      <section className="container">
        <form>
          <div className="form-group">
            <label htmlFor="signup-username">Username: </label>
            <input type="text" className="form-control" id="signup-username"/>
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email: </label>
            <input type="email" className="form-control" id="signup-email"/>
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input type="password" className="form-control" id="signup-password"/>
            <label htmlFor="signup-confirmation">Password Confirmation</label>
            <input type="password" className="form-control" id="signup-confirmation"/>
          </div>
          <button type="submit" className="btn btn-success btn-lg">Signup</button>
          <button type="button" className="btn btn-danger btn-lg">Cancel</button>
        </form>
      </section>
    )
  }
}

export default Signup