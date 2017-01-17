import React from 'react'
import Rater from 'react-rater'
import '../../node_modules/react-rater/lib/react-rater.css'
import AttendingButton from '../components/AttendingButton.jsx'
import { Card,
        CardActions,
        CardHeader,
        CardMedia,
        CardTitle,
        CardText} from 'material-ui/Card'
import '../scss/search-results.scss'

export default props =>
<li>
  <Card>
  <CardHeader
      title={props.result.name}
      subtitle={`${props.result.attending} attending`}
      avatar={<img className="result-img" src={props.result.image_url} alt={`Image of ${props.result.name}`}/>}
    />
    <CardText>
      <blockquote>{props.result.snippet_text}</blockquote>
      <br />
      <Rater rating={props.result.rating} total={5} interactive={false} />
      <br />
      <div>{props.result.rating} out of 5 stars, {props.result.review_count} reviews</div>
    </CardText>
    <CardActions>
      <AttendingButton key={`attending-btn-${props.result.id}`} userGoing={props.result.user_going} attending={props.result.attending} setAttending={props.setAttending} removeAttending={props.removeAttending} id={props.result.id} isLoggedIn={props.isLoggedIn} center={props.center}/>
      <a href={props.result.url} target="_blank">Yelp Page</a>
    </CardActions>
  </Card>
</li>
