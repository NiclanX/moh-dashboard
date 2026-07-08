import React, { useContext, useState } from 'react'
import useGetThisUser from '../services/useGetThisUser'
import supabase from '../services/Supabase';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { FaAppStore, FaChevronLeft, FaChevronRight, FaFile, FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { HiDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { sessionContext } from '../services/useGetSession';




function SideBar() { 

  const [opebar, setOpebar] = useState(true);
  
  const {thisUser, loading } = useGetThisUser();

  if ( loading) {
    <p>Loading ... </p>
  }


  function name() {
    alert('Logging out now')
  }

  const size = 26;

  const {signout} = useContext(sessionContext)


  return (
    <>
    <aside className={opebar ? 'sidebar' : 'sidebar close'}>
      <div className="sidebartop">
        <h3 className='sidehead'>{thisUser?.name}</h3>
        {opebar ? <FaChevronLeft size={24} onClick={()=>{
          setOpebar(!opebar)
        }}/> : <FaChevronRight size={24} onClick={()=>{
          setOpebar(!opebar)
        }}/>}
      </div>
      <ListItem name={'Dashboard'} to={'/'} compon={<FaHome size={size}/>}/>
      <ListItem name={'Users'} to={'users'} compon={<FaUser size={size}/>}/>
      <ListItem name={'Applications'} to={'applications'} compon={<FaFile size={size}/>}/>
      <ListItem name={'Reports'} to={'usersl'} compon={<HiDocumentReport size={size}/>}/>
      <ListItem name={'Settings'} to={'user'} compon={<IoMdSettings size={size}/>}/>
      <ListItem name={'Sign Out'}  compon={<FaSignInAlt size={size}/>} func={signout}/>     
    </aside>

    </>
  )
}

export default SideBar