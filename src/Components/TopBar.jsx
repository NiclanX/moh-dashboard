import React from 'react'
import supabase from '../services/Supabase';
import { Link } from 'react-router-dom';
supabase

function TopBar() {

    async function signout() {
        const { error } = await supabase.auth.signOut()
    
        if (error) return console.error(`This is the error: ${error}`);
       
    
        navigate('/login')
    
      }

  return (
   <ul className='top'>
    <Link> <li>Dashboard</li></Link>
    <li>Users</li>
    <li>Food</li>
    <li>Something</li>
    <li>Something</li>
    <li onClick={()=>{
        signout()
    }}>logout</li>
   </ul>
  )
}

export default TopBar