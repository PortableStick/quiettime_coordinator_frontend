import React from 'react'
import Rater from 'react-rater'
import '../scss/search-results.scss'
import '../../node_modules/react-rater/lib/react-rater.css'
import AttendingButton from '../containers/AttendingButton.jsx'

export default props => {
  const results = props.results
    .map(result => <li key={result.id} className="row">
      <img src={result.image_url} className="col-xs-3 result-img"/>
      <div className="col-xs-3">
        <h3><a href={result.url} target="_blank">{result.name}</a></h3>
        <div>{result.snippet_text}</div>
      </div>
      <div className="col-xs-3">
        <Rater rating={result.rating} total={5} interactive={false} />
        <div>{result.rating} out of 5 stars, {result.review_count} reviews</div>
      </div>
      <div className="col-xs-3">
        <AttendingButton going={result.user_going} attending={result.attending} location={result.id} isLoggedIn={props.isLoggedIn} center={props.center}/>
      </div>
      </li>)
  return (
  <ul>
    {results}
  </ul>
  )
}