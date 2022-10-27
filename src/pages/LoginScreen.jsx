import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/login.css'


const LoginScreen = () => {

    const { handleSubmit, register, reset } = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }


    if (isLogged) {
        return (
            <div className='login-container'>
                <div className="login-card">
                    <h3>You are logged successfully</h3>
                    <button className='login-btn' onClick={handleLogout}>LOGOUT</button>
                </div>
                
            </div>
        )
    }

    return (
        <div className="login-container">
            <div className='login-card'>
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className='login-form' onSubmit={handleSubmit(submit)}>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" placeholder='Email' id='email' {...register('email')} />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input placeholder='Password' type="password" id='password' {...register('password')} />
                    </div>
                    <a>Forgot your password?</a>
                    <button className='login-btn'>LOGIN</button>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen