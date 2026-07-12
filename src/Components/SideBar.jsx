import React, { useContext, useState } from 'react'
import useGetThisUser from '../services/useGetThisUser'
import supabase from '../services/Supabase';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { FaAppStore, FaBell, FaChevronLeft, FaChevronRight, FaClipboardList, FaFile, FaHome, FaInfo, FaInfoCircle, FaSignInAlt, FaUser, FaUserFriends } from 'react-icons/fa';
import { HiDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { sessionContext } from '../services/useGetSession';
import Roles from './Roles';




function SideBar() {

  const [openbar, setOpenbar] = useState(true);
  const { thisUser, loading } = useGetThisUser();
  const { signout } = useContext(sessionContext)

  if (loading) {
   return <p>Loading ... </p>
  }

  


  const size = 20;




  return (
    <>
      <aside className={openbar ? 'sidebar' : 'sidebar close'}>
        <div className="sidebartop">
          <h3 className='sidehead'>{thisUser?.name}</h3>
          {openbar ? <FaChevronLeft size={24} onClick={() => {
            setOpenbar(!openbar)
          }} /> : <FaChevronRight size={24} onClick={() => {
            setOpenbar(!openbar)
          }} />}
        </div>
        <ListItem name={'Dashboard'} to={'/'} compon={<FaHome size={size} />} />
          <Roles user={[thisUser?.role]}>
            <ListItem name={'Users'} to={'users'} compon={<FaUserFriends size={size} />} />
            <ListItem name={'My Profile'} to={'myprofile'} compon={<FaUser size={size} />} />
            <ListItem name={'My Applications'} to={'myapplications'} compon={<FaFile size={size} />} />
            <ListItem name={'All Applications'} to={'applications'} compon={<FaClipboardList size={size} />} />
          </Roles>
          <ListItem name={'Notifications'} to={'notifications'} compon={<FaBell size={size} />} />
          <ListItem name={'Reports'} to={'reports'} compon={<HiDocumentReport size={size} />} />
          <ListItem name={'Settings'} to={'settings'} compon={<IoMdSettings size={size} />} />
          <ListItem name={'Whats New'} to={'info'} compon={<FaInfoCircle size={size} />} />
        <ListItem name={'Sign Out'} compon={<FaSignInAlt size={size} />} func={signout} />
      </aside>

    </>
  )
}

export default SideBar