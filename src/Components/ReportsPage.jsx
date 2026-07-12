import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './navComponents/Nav'


function ReportsPage() {

  const navItems = [
        {name: 'General', to: ''},
        {name: 'User', to: 'user'},
        {name: 'Application', to: 'application'},
        {name: 'Basic', to: 'basic'},
        {name: 'Gender', to: 'gender'},
        {name: 'Tasks', to: 'tasks'},
        {name: 'logs', to: 'logs'},
        {name: 'Activity', to: 'activity'},

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