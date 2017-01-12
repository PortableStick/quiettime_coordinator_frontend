import React from 'react'

export default props => {
  const plans = props.user.plans.map((plan, i) => <li key={`${plan}+${i}`}>{plan}</li>)

  return (
    <div>
      <h2>Your plans...</h2>
      <ul>
        {plans}
      </ul>
    </div>
  )
}