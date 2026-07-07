import React from 'react'
import supabase from '../services/Supabase'
import { useContext } from 'react';
import { sessionContext } from '../services/useGetSession';
import { useNavigate } from 'react-router-dom';
import useGetThisUser from '../services/useGetThisUser';
import TopBar from './TopBar';
import SideBar from './SideBar';

function Dashboard() {

  const { thisUser, loading } = useGetThisUser()

  


  const { user } = useContext(sessionContext)
  const navigate = useNavigate()

  if (loading) return <h1>Loading ... </h1>

  if (!user) {
    navigate('/login')
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) return console.error(`This is the error: ${error}`);
   

    navigate('/login')

  }





  return (
    <>
    <div className="placeholder">
      <h1>Hi {thisUser?.name}, welcome back</h1>
      <button onClick={()=>signout()}>Sign Out</button>
    </div>
    </>
  )
}

export default Dashboard