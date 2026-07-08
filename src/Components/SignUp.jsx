import { useContext, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import { sessionContext } from '../services/useGetSession'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const notify = (message)=> {
    toast.error(message)
  }

  const { user, loading } = useContext(sessionContext)

  const navigate = useNavigate()


  if (loading) {
    return <h1>Loading...</h1>
  }

 
  if (user) {
    // console.log('user active');
    return <Navigate to={'/'} replace/>
  }


 async function onSubmit(formData) {

  if (formData.password !== formData.Confirmpassword) {
    const message = "Passwords do not match";
    notify(message)
    return
  }

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        first_name: formData.name,
        surname: formData.surname,
        gender: formData.gender
      }
    }
  })

  if (error) {
    notify(error.message)
    console.log(error.message)
    return
  }

  
  if (data.user) {

    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: data.user.id,
        name: formData.name,
        surname: formData.surname,
        gender: formData.gender,
        email: formData.email
      })

    if (profileError) {
      console.log(profileError.message)
      return
    }

    navigate('/')
  }
 
  
}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>

  <input
    {...register('name', {
      required: 'First name required'
    })}
    type="text"
    placeholder="First Name"
  />

  <input
    {...register('surname')}
    type="text"
    placeholder="Last Name"
  />

  <select {...register('gender')}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>

  <input
    {...register('email', {
      required: 'Email required'
    })}
    type="email"
    placeholder="Email"
  />

  <input
    {...register('password', {
      required: 'Password required',
      minLength: 8
    })}
    type="password"
    placeholder="Password"
  />

  <input
    {...register('Confirmpassword')}
    type="password"
    placeholder="Confirm Password"
  />

  <input type="submit" value="Sign Up" />

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
</form>
<ToastContainer
  autoClose={1500}
  position='bottom-right'
/>

    </>

  )
}

export default SignUp