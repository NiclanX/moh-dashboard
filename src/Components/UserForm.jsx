import React, { useState } from 'react'
import './UseForm.css'
import { useForm } from 'react-hook-form'
import logo from '../assets/logo.svg'


function UserForm() {

    const {register, handleSubmit } = useForm()

    const [close, setClose] = useState(false)

    const closer = (formData)=> {

        console.log(formData);
        
        setClose(prev=> !prev)
    }



    return (
        <div className= {close ? "formContainer formClose" : "formContainer" }>
            <form className="userForm" onSubmit={handleSubmit(closer)} >
                <div>
                    <img src={logo} alt="logo" style={{marginTop: '20px'}}/>
                    <h1>Add User</h1>
                </div>
                <input {...register('name', {required: 'First name required'})}  type="text" className="user" />
                <input type="submit" value="Add User" />
            </form>
        </div>
    )
}

export default UserForm