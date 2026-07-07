import { createContext, useEffect, useState } from "react";
import supabase from "./Supabase";

export const sessionContext = createContext();

export default function SessionProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        // Check current session when app loads
        async function getSession() {

            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error(error);
            }

            setUser(data.user);
            setLoading(false);
        }


        getSession();


        // Listen for login/logout changes
        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );


        return () => {
            subscription.unsubscribe();
        };


    }, []);


    return (
        <sessionContext.Provider value={{user, loading}}>
            {children}
        </sessionContext.Provider>
    );
}