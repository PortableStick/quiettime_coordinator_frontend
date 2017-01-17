import React from 'react'
import UserPlan from './UserPlan.jsx'

export default props => {
  const plans = props.user.plans.map((plan, i) =>
    <UserPlan key={`plan-${i}`}
            plan={plan}
            removeAttending={props.removeAttending} />)

  return (
    <div>
      <h2>Your plans...</h2>
      <ul>
        {plans}
      </ul>
    </div>
  )
}