import React, { useState } from 'react'
import './UseForm.css'
import { useForm } from 'react-hook-form'
import logo from '../assets/logo.svg'
import { FaWindowClose } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import supabase from '../services/Supabase';
import { Navigate, useNavigate } from 'react-router-dom';




function UserForm({ opener, onclick }) {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const notify = (message) => toast.error(message)



    const testsub = async (form) => {
        console.log(form);
        
        if (form.password != form.confirmpassword) {
            notify('Passwords Do Not Match');
            return
        }

        const { data,  error } = await supabase.functions.invoke(
            "super-action",
            {
                body: {
                    email: form.email,
                    password: form.password,
                    name: form.name,
                    surname: form.surname,
                    gender: form.gender,
                    phone: form.phone,
                    role: form.role
                }
            }
        );


         if (error) {
        console.log(error);
        notify(error.message);
        return;
    }


    console.log("Created User:", data);
    notify("User Created Successfully");

    navigate('/users/'+ data.user.id)
    



    }


    return (
        <div className={opener ? "formContainer" : "formContainer formClose"}>
            <form className="userForm" onSubmit={handleSubmit(testsub)} >
                <div className="lock">
                    <FaWindowClose size={24} onClick={onclick} />
                    <ToastContainer autoClose={1500} position='bottom-right'
                    />
                </div>
                <div>
                    <img src={logo} alt="logo" style={{ marginTop: '20px' }} />
                    <h1>Add User</h1>
                </div>

                <div className="names">

                    <input placeholder='First Name' {...register('name', { required: 'First name required' })} type="text" className="user" />
                    <input placeholder='Last Name' {...register('surname', { required: 'First name required' })} type="text" className="user" />
                </div>

                <select {...register('role')}>
                    <option value="employee">Employee</option>
                    <option value="manager">Manager/Supervisor</option>
                    <option value="admin">Administrator</option>
                </select>
                <select {...register('gender')}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input placeholder='Email Address' {...register('email', { required: 'First name required' })} type="email" className="user" />
                <input placeholder='1234567890' {...register('phone', { required: 'First name required' })} type="tel" className="user" />
                <input placeholder='Password' minLength={8} id='password' {...register('password', { required: 'First name required' })} type="password" className="user" />
                <input placeholder='Confirm Password' minLength={8} id='confirmpassword'  {...register('confirmpassword', { required: 'First name required' })} type="password" className="user" />

                <input type="submit" value="Add User" />
            </form>
        </div>
    )
}

export default UserForm