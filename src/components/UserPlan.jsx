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
        <CardHeader title={props.plan.replace(/\-/g,' ')}
                  subtitle={<a href={`https://yelp.com/biz/${props.plan}`}/>} target="_blank"
                  />
        <CardActions>
          <IconButton tooltip="Remove plan" touch={true} onClick={props.removeAttending.bind(null, props.plan)}><DeleteForever /></IconButton>
        </CardActions>
      </Card>
    </li>