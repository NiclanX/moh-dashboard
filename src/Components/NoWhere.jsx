import React from 'react'
import { useLocation } from 'react-router-dom'



function NoWhere() {

  const { pathname } = useLocation()
  
  if (pathname.includes('reports')) {
    return (
      <div className="pageContainer">

        <div className="NoPage">
          <h1>Comming Soon 📈</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="pageContainer">
      <div className="NoPage">
        <h1>Comming Soon 😅</h1>
      </div>
    </div>
  )
}

export default NoWhere