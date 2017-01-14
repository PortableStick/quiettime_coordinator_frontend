import React from 'react'
import Rater from 'react-rater'
import '../scss/search-results.scss'
import '../../node_modules/react-rater/lib/react-rater.css'
import AttendingButton from '../containers/AttendingButton.jsx'

export default props => <li className="row">
      <img src={props.result.image_url} className="col-xs-3 result-img"/>
      <div className="col-xs-3">
        <h3><a href={props.result.url} target="_blank">{props.result.name}</a></h3>
        <div>{props.result.snippet_text}</div>
      </div>
      <div className="col-xs-3">
        <Rater rating={props.result.rating} total={5} interactive={false} />
        <div>{props.result.rating} out of 5 stars, {props.result.review_count} reviews</div>
      </div>
      <div className="col-xs-3">
        <AttendingButton key={`attending-btn-${props.result.id}`} userGoing={props.result.user_going} attending={props.result.attending} location={props.result.id} isLoggedIn={props.isLoggedIn} center={props.center}/>
      </div>
    </li>