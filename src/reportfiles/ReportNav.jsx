import React from 'react'
import ReportNavItem from './ReportNavItem'
import './ReportNav.css'

function ReportNav() {
  return (
   <nav className="reportNav">
        <ReportNavItem name={'General'} to={''}/>
        <ReportNavItem name={'User'} to={'user'}/>
        <ReportNavItem name={'Application'} to={'applications'}/>
        <ReportNavItem name={'Basic'} to={'basic'}/>
        <ReportNavItem name={'Gender'} to={'gender'}/>
        <ReportNavItem name={'Tasks'} to={'tasks'}/>
        <ReportNavItem name={'Activity'} to={'activity'}/>
        <ReportNavItem name={'Misc'} to={'misc'}/>
   </nav>
  )
}

export default ReportNav