import React from 'react'

export default ({ component: Component, ...rest }) => {
  return (
    <div>
      <Component {...rest} />
    </div>
  )
}