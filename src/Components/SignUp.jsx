import React from 'react'
import { Link } from 'react-router'

function SignUp() {
  return (
    <>
            <form>
                <h1>Sign Up</h1>
                <input type="text" name="" id="" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="password" name="" id="" placeholder='Enter Password Again' />
                <br />
                <input type="submit" value="Log In" />
            </form>
            <p>Already have an account? {<Link to="/login">Log In</Link>} </p>
        </>
  )
}

export default SignUp