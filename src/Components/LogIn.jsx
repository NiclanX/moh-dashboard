import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import { sessionContext } from '../services/useGetSession'
import { ToastContainer, toast } from 'react-toastify';
import logo from '../assets/logo.svg'


function LogIn() {

    const notify = (message) => {
        toast.error(message)
    }

    const { user, loading } = useContext(sessionContext)
    const [submitting, setSubmitting] = useState(false)

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
        setSubmitting(true)

        e.preventDefault()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            console.log(`The error is ${error.message}`)
            setSubmitting(false)
            notify(error.message);
            return
        }

        setSubmitting(false)

        navigate("/")
    }


    return (
        <>
            <form className='Inform' onSubmit={handleLogin}>
                <img style={{width: '120px', marginBottom: '40px 0px'}} src={logo} alt="Moh Logo" />
                <h1>Log In</h1>
               
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Link to={'/j'}>Forgot Password?</Link>
                <input type="submit" value={submitting ? 'Logging in . . . ' : 'Log In'} disabled={submitting}/>

            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            </form>
            <ToastContainer
                autoClose= {2000}
            />

        </>
    )
}

export default LogIn