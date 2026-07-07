import React from 'react'
import useGetThisUser from '../services/useGetThisUser'
import supabase from '../services/Supabase';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';



function SideBar({thisUser}) {  

    const navigate = useNavigate()

    


  return (
    <>
    <h3>Hi {thisUser?.name} welcome back</h3>

    <ul className='side-list'>
        <ListItem name={'Dashboard'} to={'/'}/>
        <ListItem name={'User Management'} to={'/login'}/>
        <ListItem name={'Application Review'} to={'/'}/>

    </ul>

    <button onClick={()=> {
        signout()
    }}>Sign Out</button>
    </>
  )
}

export default SideBar