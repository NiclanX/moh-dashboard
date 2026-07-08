import React from 'react'
import { NavLink } from 'react-router-dom'

function NoWhere() {
  return (
    <div className="404">
      <h1>Nothing to See here</h1>
      <NavLink to={'/login'}> Log In</NavLink>
    </div>
  )
}

export default NoWhere