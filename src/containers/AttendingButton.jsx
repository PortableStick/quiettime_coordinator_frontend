import React, { Component } from 'react'
import { addLocationToUser, removeLocationFromUser, addLocationSent, removeLocationSent } from '../actions/actions'
import store from '../store/store'

class AttendingButton extends Component {

  constructor(props) {
    super(props)
    const locationObj = JSON.stringify({
      update: {
        yelp_id: this.props.location,
        center: this.props.center
      }
    })
    this.state = {
      userGoing: props.user_going,
      attending: props.attending,
      locationData: locationObj
    }
  }

  setAttending() {
    this.setState({userGoing: true, attending: this.state.attending + 1})
    store.dispatch(addLocationToUser(this.state.locationData))
    store.dispatch(addLocationSent())
  }

  removeAttending() {
    this.setState({userGoing: false, attending: this.state.attending - 1})
    store.dispatch(removeLocationFromUser(this.state.locationData))
    store.dispatch(removeLocationSent())
  }

  render() {
    const attendBtn = <button type="button" className="btn btn-default" onClick={this.setAttending.bind(this)} >Attend</button>
    const goingBtn = <button type="button" className="btn btn-success attending-btn" onClick={this.removeAttending.bind(this)} >Attending</button>
    if(this.props.isLoggedIn) {
      return (
        <div>
          {this.state.userGoing ? goingBtn : attendBtn}
          <div>{this.state.attending} attending</div>
        </div>
      )
    } else {
      return (<div className="btn btn-warning" >Log in to participate</div>)
    }
  }
}

export default AttendingButton