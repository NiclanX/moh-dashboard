import React from 'react'

function Roles({user, children}) {

    


if (!user.includes('admin')) return

  return (
    children
  )
}

export default Roles