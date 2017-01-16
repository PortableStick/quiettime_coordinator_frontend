import React from 'react'

export default props =>
    <li className="userplan">
      <a href={`https://yelp.com/biz/${props.plan}`} target="_blank">{props.plan.replace(/\-/g,' ')}</a>
    </li>