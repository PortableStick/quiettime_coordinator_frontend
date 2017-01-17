import React from 'react'
import { addLocationToUser, removeLocationFromUser, addLocationSent, removeLocationSent } from '../actions/actions'
import store from '../store/store'
import DefaultButton from './DefaultButton.jsx'
import ConfirmationButton from './ConfirmationButton.jsx'
import SaveButton from './SaveButton.jsx'

export default props => {
  if(props.isLoggedIn) {
    return (
      <div className="col-xs-3">
        {
        props.userGoing
          ?
        <SaveButton class="attending-btn" save={props.removeAttending} >Attending</SaveButton>
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
