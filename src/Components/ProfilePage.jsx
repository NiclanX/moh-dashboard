import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../services/Supabase';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ProfilePage.css'


function ProfilePage() {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const getProfile = async () => {
            const { data, error } = await supabase
                .from('users')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                console.log(error);
                setLoading(false)
                return
            }

            console.log(data);
            setProfile(data);
            setLoading(false)

        }

        getProfile();

    }, [])


    if (loading) {
        return <div>loading .. .</div>
    }

    const iconSize = 24


    


    return (
        <>
        <div className="profileContainer">

            <div className="infoCard">
            <h1 className='profile-head'>{profile.name} {profile.surname}</h1>
            <p>{profile.email}</p>
              <p>Personal Info:</p>
              <br />
            <div className="icons">
                <FaEdit size={iconSize} onClick={()=>confirm('You would like to edit this record?')} />
                <FaTrashAlt size={iconSize} />
            </div>

            <div className="personal">
                
            <p>User Role: <strong>{profile.role.charAt(0).toUpperCase() + profile.role.slice(1).toLowerCase()}</strong></p>
            <p>Gender: {profile.gender}</p>
            <p>Phone: {profile.phone_number}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default ProfilePage