import React from 'react'
import Rater from 'react-rater'
import '../scss/search-results.scss'
import '../../node_modules/react-rater/lib/react-rater.css'

export default props => {
  const attendBtn = <button type="button" className="btn btn-default">Attend</button>
  const goingBtn = <button type="button" className="btn btn-success attending-btn">Attending</button>

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
        {result.user_going ? goingBtn : attendBtn}
        <div>{result.attending} attending</div>
      </div>
      </li>)
  return (
  <ul>
    {results}
  </ul>
  )
}