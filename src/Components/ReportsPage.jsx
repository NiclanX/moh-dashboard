import React from 'react'
import { Outlet } from 'react-router-dom'
import ReportNav from '../reportfiles/ReportNav'


function ReportsPage() {
  return (
    <>
            <h1>Report Layout</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nemo sed aliquid corporis harum cupiditate?</p>
            <ReportNav/>
            <Outlet />
    </>
  )
}

export default ReportsPage