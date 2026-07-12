import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../services/Supabase';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


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
            <h1 className='profile-head'>{profile.name} {profile.surname}</h1>
            <FaEdit size={iconSize} onClick={()=>confirm('You would like to edit this record?')} color='green'/>
            <FaTrashAlt size={iconSize} color='green' />
            <p>User Role: <strong>{profile.role.charAt(0).toUpperCase() + profile.role.slice(1).toLowerCase()}</strong></p>
            <p>Gender: {profile.gender}</p>
            <p>Email: {profile.email}</p>
        </>
    )
}

export default ProfilePage