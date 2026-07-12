import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from '../Components/navComponents/Nav'

function SettingsPage() {

  const navItems = [
    {name: 'System', to: ''},
    {name: 'User', to: 'user'},
    {name: 'Global', to: 'global'},
    {name: 'Auth', to: 'auth1'},
    {name: 'Auth', to: 'auth2'},
    {name: 'Auth', to: 'auth3'},
    {name: 'Auth', to: 'auth4'},

  ]

  return (
    <>
    <h1>Settings</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nesciunt veniam nemo cumque itaque incidunt iusto sit cupiditate tempora earum porro quis, repudiandae possimus.</p>
    <Nav NavItems={navItems} />
    <Outlet/>
    </>
  )
}

export default SettingsPage