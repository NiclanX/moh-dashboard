import React from 'react'
import supabase from '../services/Supabase'
import { useContext } from 'react';
import { sessionContext } from '../services/useGetSession';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const {user} = useContext(sessionContext)
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
  }

async function signout() {
  const {error} = await supabase.auth.signOut()

  if (error) {
    console.error(`This is the error: ${error}`);
    return
  }

  navigate('/login')

}


  return (
    <>
    <div>Dashboard</div>
    <button onClick={signout}>SIgn Out Now!</button>
    </>
  )
}

export default Dashboard