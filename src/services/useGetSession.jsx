import { createContext, useContext, useEffect, useState } from "react";
import supabase from "./Supabase";

export const sessionContext = createContext();

export default function SessionProvider({children}) {

    const [user, setUser] = useState(null)

    useEffect(() => {

        async function getSession() {

            const { data, error } = await supabase.auth.getUser()

            if (error) {
                console.error(error)
                return
            }

            setUser(data.user)
            console.log(data);
            
        }

        getSession()

    }, [])

    return (
        <sessionContext.Provider value={{user}}>
            {children}
        </sessionContext.Provider>
    )
}


export function useGetUser() {
    return useContext(sessionContext)
}