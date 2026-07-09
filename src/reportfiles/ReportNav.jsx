import React from 'react'
import ReportNavItem from './ReportNavItem'
import './ReportNav.css'

function ReportNav() {
  return (
   <nav className="reportNav">
        <ReportNavItem name={'General'} to={''}/>
        <ReportNavItem name={'Basic'} to={'basic'}/>
        <ReportNavItem name={'Gender'} to={'gender'}/>
        <ReportNavItem name={'Tasks'} to={'tasks'}/>
   </nav>
  )
}

export default ReportNav