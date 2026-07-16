import React, { useEffect, useState } from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import supabase from '../../services/Supabase'


function GenderCard() {

        const [genders, setGenders] = useState(null)

    useEffect(() => {

        const getUserCounts = async () => {
            const { data, error } = await supabase.rpc('get_user_counts')


            if (error) {
                console.error(error.message)
                return
            }

            console.log(data);
            
            setGenders(data);

        }

        getUserCounts()


    }, [])


if (!genders) {
    console.log('johdkshd');
    
    return (
        <div>No Data</div>
    )
}



    return (

       <div className="genderCard">
           <h2>{genders[0].role.toUpperCase()}</h2>
       </div>
       
    )
}

export default GenderCard