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





  return (
    <>
      <div className="dashboard">
        <div className="side">
          <SideBar thisUser={thisUser}/>
        </div>
        <div className="main">
          hello
        </div>
      </div>
    </>
  )
}

export default Dashboard