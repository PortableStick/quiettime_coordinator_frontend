import React from 'react'
import { addLocationToUser, removeLocationFromUser, addLocationSent, removeLocationSent } from '../actions/actions'
import store from '../store/store'
import DefaultButton from './DefaultButton.jsx'
import ConfirmationButton from './ConfirmationButton.jsx'
import PrimaryButton from './PrimaryButton.jsx'

export default props => {
  if(props.isLoggedIn) {
    return (
        props.userGoing
          ?
        <PrimaryButton class="attending-btn" onClick={props.removeAttending} >Attending</PrimaryButton>
          :
        <DefaultButton onClick={props.setAttending}>Attend</DefaultButton>
    )
  } else {
    return (<ConfirmationButton >Log in to participate</ConfirmationButton>)
  }
}
