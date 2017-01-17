import React from 'react'
import { Card,
        CardActions,
        CardHeader,
        CardMedia,
        CardTitle,
        CardText} from 'material-ui/Card'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import IconButton from 'material-ui/IconButton'
export default props =>
    <li className="userplan">
      <Card>
        <CardHeader title={<h3>{props.plan.replace(/\-/g,' ')}</h3>}
                  subtitle={<a href={`https://yelp.com/biz/${props.plan}`}>Yelp Link</a>} target="_blank"
                  />
        <CardActions>
          <IconButton tooltip="Remove plan" touch={true} onClick={props.removeAttending.bind(null, props.plan)}><DeleteForever /></IconButton>
        </CardActions>
      </Card>
    </li>