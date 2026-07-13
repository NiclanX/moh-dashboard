import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './navComponents/Nav'


function ReportsPage() {

  const navItems = [
        {name: 'General', to: ''},
        {name: 'User', to: 'user'},
        {name: 'Application', to: 'application'},
        {name: 'Report 3', to: 'basicReport'},
        {name: 'Report 4', to: 'genderReport'},
        {name: 'Report 4', to: 'tasksReport'},
        {name: 'Report 6', to: 'logsReport'},
        {name: 'Report 7', to: 'activityReport'},

  ]

  return (
    <>
            <h1>Report Layout</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nemo sed aliquid corporis harum cupiditate?</p>
            <Nav NavItems={navItems}/>
            <Outlet />
    </>
  )
}

export default ReportsPage