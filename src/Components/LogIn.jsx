import React from 'react'
import { Link } from 'react-router'
import supabase from '../services/Supabase'
import { useState } from 'react'



function LogIn() {
    const [user, setUser] = useState(null)

    async function handlelogin(email, password) {
        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            console.log(`The error is ${error}`)
            return
        }

         setUser(data)    
         console.log(data.user) 

        

    }

    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 


    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                handlelogin(Email,password)
            }}>
                <h1>Log In</h1>
                <input type="text" name="" id="" placeholder='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <br />
                <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <br />
                <input type="submit" value="Log In" />
            </form>
            <p>Don't have an account? {<Link to="/signup">Sign Up</Link>} </p>
        </>
    )
}

export default LogIn