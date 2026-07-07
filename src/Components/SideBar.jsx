import React from 'react'
import useGetThisUser from '../services/useGetThisUser'
import supabase from '../services/Supabase';


function SideBar({thisUser}) {  

    async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) return console.error(`This is the error: ${error}`);
   

    navigate('/login')

  }


  return (
    <>
    <h2>Hi {thisUser.name}</h2>

    <ul className='side-list'>
        <li>Dashboard</li>
        <li>User Management</li>
        <li>Something</li>
        <li>Something</li>
    </ul>

    <button onClick={()=> {
        signout()
    }}>Sign Out</button>
    </>
  )
}

export default SideBar