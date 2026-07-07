import React, { useContext, useEffect, useState } from "react"
import { sessionContext } from "./useGetSession"
import supabase from "./Supabase"


export default function useGetThisUser() {

    const { user } = useContext(sessionContext)

    const [thisUser, setThisUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!user) {
            setLoading(false)
            return
        }

        async function getUser() {

            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', user.id)
                .single()

            if (error) {
                setError(error)
                setLoading(false)
                return
            }

            setThisUser(data)
            setLoading(false)
        }

        getUser()

    }, [user])

    return { thisUser, loading, error }
}