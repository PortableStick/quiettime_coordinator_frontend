import React from 'react'
import { addLocationToUser, removeLocationFromUser, addLocationSent, removeLocationSent } from '../actions/actions'
import store from '../store/store'

export default props => {
  const attendBtn = <button type="button" className="btn btn-default" onClick={props.setAttending} >Attend</button>
  const goingBtn = <button type="button" className="btn btn-success attending-btn" onClick={props.removeAttending} >Attending</button>
  if(props.isLoggedIn) {
    return (
      <div className="col-xs-3">
        {props.userGoing ? goingBtn : attendBtn}
        <div>{props.attending} attending</div>
      </div>
    )
  } else {
    return (<div className="btn btn-warning" >Log in to participate</div>)
  }
}
