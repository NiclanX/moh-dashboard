import React from 'react'
import supabase from '../services/Supabase'
import { useContext } from 'react';
import { sessionContext } from '../services/useGetSession';
import { useNavigate } from 'react-router-dom';
import useGetThisUser from '../services/useGetThisUser';

function Dashboard() {

  const {thisUser, loading} = useGetThisUser()

  const { user } = useContext(sessionContext)
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
  }

  if(loading) return <h1>Loading ... </h1>

  async function signout() {
    const { error } = await supabase.auth.signOut()

    if (error) return console.error(`This is the error: ${error}`);
   

    navigate('/login')

  }


  return (
    <>
      <h1>Welcome Back {thisUser?.name}</h1>
      <p>{thisUser?.id} is logged in</p>
      <div>Dashboard</div>
      <button onClick={signout}>SIgn Out Now!</button>
    </>
  )
}

export default Dashboard