import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo_black.svg'
import cog from '../assets/image.png'


function NoWhere() {

  const { pathname } = useLocation()



  
  if (pathname.includes('reports')) {
    return (
      <div className="pageContainer">

        <div className="NoPage">
          <img src={logo} alt="moh logo" />
          <h1>Comming Soon 📈</h1>
        </div>
      </div>
    )
  } else if(pathname.includes('settings')) {
    return (
      <div className="pageContainer">

        <div className="NoPage">
          <img src={logo} alt="moh logo" />
          <h1>Comming Soon 🔧</h1>
        </div>
      </div>
    )
  } else

  return (
    <div className="pageContainer">
      <div className="NoPage">
         <img src={cog} alt="moh logo" id='spinner'/>
        <h1>Comming Soon 🔑</h1>
      </div>
    </div>
  )
}

export default NoWhere