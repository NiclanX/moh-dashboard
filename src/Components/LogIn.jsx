import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import { sessionContext } from '../services/useGetSession'

function LogIn() {

    const { user, loading } = useContext(sessionContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return <Navigate to="/" replace />
    }


    async function handleLogin(e) {

        e.preventDefault()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            console.log(`The error is ${error.message}`)
            return
        }

        navigate("/")
    }


    return (
        <>
            <form onSubmit={handleLogin}>
                <h1>Log In</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <br />

                <input type="submit" value="Log In" />

            </form>

            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </>
    )
}

export default LogIn