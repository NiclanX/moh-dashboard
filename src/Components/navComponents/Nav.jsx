import React from 'react'
import '../../reportfiles/ReportNav.css'
import ReportNavItem from '../../reportfiles/ReportNavItem'

function Nav({NavItems}) {

/** Renders a nav bar */


  return (

    <nav className="reportNav">
        {NavItems.map(item=>{
           return <ReportNavItem key={item.to} name={item.name} to={item.to} />
        })} 
    </nav>
  )
}

export default Nav