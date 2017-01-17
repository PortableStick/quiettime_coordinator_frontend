import React from 'react'
import { addLocationToUser, removeLocationFromUser, addLocationSent, removeLocationSent } from '../actions/actions'
import store from '../store/store'
import DefaultButton from './DefaultButton.jsx'
import ConfirmationButton from './ConfirmationButton.jsx'
import PrimaryButton from './PrimaryButton.jsx'

export default props => {
  if(props.isLoggedIn) {
    return (
      <div className="col-xs-3">
        {
        props.userGoing
          ?
        <PrimaryButton class="attending-btn" onClick={props.removeAttending} >Attending</PrimaryButton>
          :
        <DefaultButton onClick={props.setAttending}>Attend</DefaultButton>
      }
        <div>{props.attending} attending</div>
      </div>
    )
  } else {
    return (<ConfirmationButton >Log in to participate</ConfirmationButton>)
  }
}
