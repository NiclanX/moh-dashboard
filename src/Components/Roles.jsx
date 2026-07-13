import React from 'react'

function Roles({user, restrictTo, children}) {

    


if (!user.includes(restrictTo)) return

  return (
    children
  )
}

export default Roles