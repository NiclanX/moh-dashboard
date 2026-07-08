import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../services/Supabase';


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



    return (
        <>
            <h1 className='profile-head'>{profile.name} {profile.surname}</h1> 
            <p>{profile.gender}</p>
            <p>{profile.email}</p>
        </>
    )
}

export default ProfilePage